const express = require('express');
const fs = require('fs').promises; // Using promises for cleaner async code
const path = require('path');
const app = express();

// Ställ in EJS som view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware för att servera statiska filer
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===== Routes =====

// Huvudsidor
app.get('/', (_, res) => {
    res.render('startsidan');
});

// Admin-relaterade routes
app.get('/admin', (req, res) => {
    const users = readUserData();
    res.render('admin', { 
        userCount: users.length,
        workOrders: 0, // Lägg till logik för arbetsorder här
        messages: 0    // Lägg till logik för meddelanden här
    });
});

// Användarhantering routes
app.get('/users', (_, res) => {
    res.render('adminsidor/users');
});

app.get('/add-user', (_, res) => {
    res.render('adminsidor/add');
});

/**
 * Hämtar användare från JSON-filen
 * @returns {Promise<Array>} Array med användare
 */
async function getUsers() {
    const filePath = path.join(__dirname, 'public', 'användare', 'aktiva.json');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Kunde inte läsa användarfilen:', err);
        throw new Error('Kunde inte läsa användardata');
    }
}

/**
 * Sparar användare till JSON-filen
 * @param {Array} users Array med användare att spara
 * @returns {Promise<void>}
 */
async function saveUsers(users) {
    const filePath = path.join(__dirname, 'public', 'användare', 'aktiva.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('Kunde inte spara användardata:', err);
        throw new Error('Kunde inte spara användardata');
    }
}

// Route för att hantera formulärinskick och spara ny användare
app.post('/add-user', async (req, res) => {
    try {
        const users = await getUsers(); // Hämta befintliga användare
        const highestId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);

        // Skapa en ny användare med nästa ID
        const newUser = {
            id: highestId + 1,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role,
            phone: req.body.phone,
            address: req.body.address,
            emergencyContact: req.body.emergencyContact,
            emergencyPhone: req.body.emergencyPhone,
            gender: req.body.gender,
            profileImage: req.body.profileImage,
            age: req.body.age
        };

        users.push(newUser); // Lägg till den nya användaren
        await saveUsers(users); // Spara uppdaterad lista
        res.status(201).send('Användare tillagd');
    } catch (error) {
        console.error('Fel vid sparande av användare:', error);
        res.status(500).send('Kunde inte spara användaren');
    }
});

// Hjälpfunktion för att läsa användardata
const readUserData = async () => {
    const filePath = path.join(__dirname, 'public', 'användare', 'aktiva.json');
    try {
        const data = await fs.readFile(filePath, 'utf8'); // Läser filen asynkront
        return JSON.parse(data); // Parsar JSON-data
    } catch (error) {
        console.error('Fel vid läsning av användardata:', error);
        return []; // Returnera en tom array vid fel
    }
};

// API-endpoint för att hämta statistik
app.get('/api/stats', async (req, res) => {
    try {
        const users = await readUserData(); // Läser användardata från aktiva.json
        res.json({
            userCount: Array.isArray(users) ? users.length : 0, // Kontrollera att users är en array
            activeOrders: 0, // Lägg till logik för arbetsorder här om det behövs
            newMessages: 0   // Lägg till logik för meddelanden här om det behövs
        });
    } catch (error) {
        console.error('Fel vid hämtning av statistik:', error);
        res.status(500).json({ error: 'Kunde inte hämta statistik' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await readUserData(); // Läser användardata från aktiva.json
        res.json(users);
    } catch (error) {
        console.error('Fel vid hämtning av användardata:', error);
        res.status(500).json({ error: 'Kunde inte hämta användardata' });
    }
});

// Endpoint för att ta bort en användare
app.delete('/api/users/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        let users = readUserData();
        users = users.filter(user => user.id !== userId); // Filtrera bort användaren
        saveUsers(users); // Spara uppdaterad lista
        res.status(200).send('Användare borttagen');
    } catch (error) {
        console.error('Fel vid borttagning av användare:', error);
        res.status(500).json({ error: 'Kunde inte ta bort användaren' });
    }
});

// Globalt felhanteringsmiddleware
app.use((err, _, res, _next) => {
    console.error('Serverfel:', err);
    res.status(500).send('Ett serverfel inträffade. Försök igen senare.');
});

// 404-hantering för okända routes
app.use((_, res) => {
    res.status(404).send('Sidan kunde inte hittas');
});

// Starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servern körs på http://localhost:${PORT}`);
});

async function fetchUsers() {
    try {
        const response = await fetch('/api/users'); // Hämta användardata från servern
        if (!response.ok) {
            throw new Error('Kunde inte hämta användardata');
        }
        const users = await response.json();
        renderUserList(users); // Rendera användarlistan
    } catch (error) {
        console.error('Fel vid hämtning av användardata:', error);
    }
}

function renderUserList(users) {
    userList.innerHTML = ''; // Rensa listan
    users.forEach(user => {
        const li = document.createElement('li');
        li.className = 'user-item';
        li.innerHTML = `
            <i class="fas fa-${user.gender === 'male' ? 'male' : 'female'}"></i>
            <a href="#" onclick="displayUserDetails(${user.id})">${user.username}</a>
            <button class="delete-user-btn" data-id="${user.id}">Ta bort</button>
        `;
        userList.appendChild(li);
    });

    // Lägg till eventlyssnare för att ta bort användare
    document.querySelectorAll('.delete-user-btn').forEach(button => {
        button.addEventListener('click', () => deleteUser(button.dataset.id));
    });
}