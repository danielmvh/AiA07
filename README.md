jag har påbörjat ett tidsrapporterin och orderhanterings system efter denna beskrivning:Jag har tänkt mig att den ska vara byggd och funka på detta sätt.
Systemet ska erbjuda en stilren och modern inloggnings sida, som är responsiv och ger en enhetlig användarupplevelse på både stationära datorer, surfplattor och mobiltelefoner. Inloggningsfunktionen ska vara säker, snabb och enkel att använda. Den ska vara estetiskt snygg.

Huvudfunktioner
1.	Arbetsorderhantering Systemet gör det möjligt för administratörer och projektledare att skapa och hantera arbetsordrar på ett smidigt sätt. Arbetsorder kan tilldelas specifika användare, och det går att följa statusen för varje order, t.ex. "I väntan på godkännande", "Pågående", "Avslutad" eller "Försenad". Systemet erbjuder en funktion för att skapa checklista kopplad till varje arbetsorder, vilket säkerställer att alla steg och kontroller genomförs och dokumenteras ordentligt.
2.	Tidsrapportering Anställda kan rapportera sina arbetade timmar direkt i systemet. För att göra tidsrapporteringen mer exakt och transparent, kan systemet också inkludera geolokalisering för att säkerställa att anställda befinner sig på rätt plats vid tidrapportering. Automatisk påminnelse kan skickas till anställda för att säkerställa att timmar rapporteras i tid.
3.	Användarhantering och Rollbaserad Åtkomst Systemet tillhandahåller en flexibel användarhantering där administratörer kan skapa och hantera användare. Olika roller som t.ex. administratör, projektledare, anställd och chef kan ges olika åtkomsträttigheter för att säkerställa att användarna endast ser och hanterar den information de behöver. För ytterligare säkerhet har systemet multifaktorautentisering och starka lösenordspolicyer.
4.	Automatiserade Påminnelser och Notifikationer Systemet skickar automatiska påminnelser för viktiga aktiviteter, som t.ex. påminnelser om arbetsordrar eller tidrapportering. Detta gör det möjligt för användarna att hålla sig uppdaterade utan att behöva följa upp manuellt.
5.	Intelligent Arbetsordertilldelning Systemet använder data om användarnas tillgänglighet och expertis för att automatiskt föreslå och tilldela arbetsordrar till rätt person. Detta gör att arbetsflödet blir mer effektivt och att rätt kompetens finns tillgänglig för varje uppdrag.
6.	Rapportering och Export För att effektivisera administration och uppföljning kan användare enkelt exportera tidrapporter och arbetsorderhistorik till PDF eller Excel. Detta gör det enklare att dokumentera och analysera data för vidare beslut eller för lönehantering.
7.	Interaktivt och Responsivt Gränssnitt Systemet är designat för att vara både användarvänligt och responsivt. Det fungerar lika bra på datorer, surfplattor och mobiler, vilket gör att användare kan komma åt systemet när som helst och var som helst. Vidare är interaktiv feedback implementerat så att användarna får bekräftelse på åtgärder som t.ex. skapande av arbetsorder eller tillägg av användare.
Startsidan/inloggnings sidan
Jag vill ha en snygg och modern startsida med en stilren och funktionell inloggningsfunktion.  Man ska kunna lägga till sin logga på startsidan och den ska man kunna ändra senare via administratörs sidan. Systemet ska ha en snygg  inloggningsgränssnitt: inloggnings menyn ska vara centrerad och gärna färggran samt ha många fina och estetiska detaljer.  Det ska finnas en text som säger Välkommen! Denna text ska man senare kunna ändra på administratörs sidan under inställningar. Det ska finnas en ruta där man ska skriva in ”användarnamn” och en för ”Lösenord”. Inloggnings knappen ska vara centrerad under med fin utformning. Färgen på knappen ska man kunna byta senare under administratörs sidan under inställningar. Sen ska det finnas en ”Glömt lösenord?” och när man trycker på den ska en ruta komma upp och där man ska fylla i sin jobbmejl, och finns den mailen inlagd som användare i systemet så ska det komma upp en till ruta som säger ”välj nytt lösenord” och när man tryckt enter eller på Ok knappen så ska det nya lösenordet sparas. Det ska visas en liten digital klocka i höger hörn som visar realtiden. 
Det ska finnas en fabriksgrundad administratörsprofil med förinställt lösenord "A07123", och användare ”admin” vilket ger tillgång till administratörssidan.

Administratören ska kunna lägga in och ha möjlighet att ändra bakgrundsbilden på startsidan. Bakgrundsbilden ska automatiskt anpassas till olika enheter (mobil, surfplatta och dator) för en enhetlig upplevelse.
Efter lyckad inloggning så ska man komma in på antingen administratörens sidan eller varje användares sidan.
Administratörsgränssnitt/ Översikt på administratörens startsida
Administratörens sida ska vara användarvänlig, med en tydlig meny och funktioner för att effektivt hantera systemet och estetiskt snygg.
För att ge snabb åtkomst till viktig information ska administratören på sin första sida kunna se:
•	Antal registrerade användare
•	Hur många arbetsordrar som är pågående/Igång
•	Om det finns nya meddelanden 
•	Dagens datum och tid


På administratörssidan ska det finnas en tydlig Undermenys uppbyggnad med följande alternativ:
1.	Hantera användare: där Administratören kan lägga till nya användare.
o	Skapa ny användare: Administratören fyller i ett formulär för att lägga till användare, inklusive kontaktuppgifter, profilbild (möjlighet att ladda upp en bild), ID-nummer och närmaste anhörig.
o	Lägga till, redigera och ta bort användare.
o	Hantera användarnas roller (t.ex. administratör eller anställd).
o	Om en användare glömmer sitt lösenord, kan administratören återställa/ändra det.
o	Vid borttagning av användare visas en bekräftelse-popup: "Är du säker på att du vill ta bort användaren?".
o	Vid redigering visas en varning innan uppdatering: "Är du säker på att du vill uppdatera användaren?".
Alla användare som finns eller läggs till ska hamna i en snygg  listade under varandra i alfabetisk ordning. Och bara med användarnamnet. Vill man få upp all resterand information får man trycka på användarnamnet och få ska all info om den användaren visas centrerat i en  ruta. brevid användarnamnet i listan ska alternativen för att redigera, ta bort och ändra lösenord finnas i små synboler. 

2.	 I undermenyn "Se tider" ska en översikt visa all rapporterad arbetstid för samtliga anställda, med summering av arbetad tid per vecka och månad. En knapp ska ge möjlighet att växla till en kalendervy, där en stor avancerad kalender med dagens månad och år ska synas och där arbetsdagar markeras tydligt. Administratörer ska kunna klicka på en dag för att se detaljerad information om arbetstid, lunchrast, och övertidstimmar eller ledighet. Översikt över all rapporterad tid med filtreringsmöjlighet.
•	Kalenderbaserad vy:
o	Röd prick = Orapporterad dag
o	Grön prick = Rapporterad dag
•	Administratörer kan redigera tidrapporter (med automatisk notis till anställd).
•	Information inkluderar:
o	Arbetstid (ex: 07:00–16:00)
o	Lunchrast (0, 30, 45, 60 min)
o	Övertid
o	Arbetsbeskrivning (obligatoriskt)


Varje anställds tidrapportering ska inkludera ordinarie arbetstid (07:00–16:00 med 1 timmes rast) och hur mycket av denna som faktiskt har arbetats, samt om rast har tagits och hur lång den var. Eventuell övertid ska redovisas tydligt, liksom den arbetsbeskrivning som den anställde själv har rapporterat. För att säkerställa transparens ska administratörer ha möjlighet att redigera tidrapporter, och vid ändringar ska ett automatiskt meddelande skickas till den anställde med information om vad som justerats och vem som genomfört ändringen.
Genom denna struktur skapas en mer lättöverskådlig och organiserad vy, där både anställda och administratörer snabbt kan få en tydlig bild av arbetstid, rast och övertid. En kalenderbaserad lösning gör det enkelt att navigera, och möjligheten att söka och filtrera rapporter bidrar till en effektiv hantering av tidrapporteringen.




3.	I menyn "Arbetsorder" ska det finnas en organiserad översikt över alla arbetsordrar, där användaren enkelt kan se vilka som är pågående, klarmarkerade eller ej påbörjade. Arbetsordrarna ska vara sorterade efter jobbnummer och en tydlig sammanställning ska visa det totala antalet arbetsordrar samt hur många som befinner sig i respektive status. Det ska också finnas möjlighet att redigera befintliga arbetsordrar direkt från denna vy.

Sen via knappen "Skapa ny arbetsorder" ska ett formulär öppnas där administratören kan fylla i nödvändig information om arbetet. Formuläret ska inkludera:
•	Datum och tidsintervall (antingen timmar eller över flera dagar/veckor)
•	Plats/Gatuadress, med en automatisk Google Maps-länk för att slippa manuell inmatning
•	Kundinformation inklusive telefonnummer
•	Typ av arbetsplats (Hus, Lägenhet, Affär, Kontor, Industri)
•	Arbetsbeskrivning – detta fält ska vara obligatoriskt för att kunna spara arbetsordern
•	Tilldelning av anställda – möjlighet att välja en eller flera anställda som ska utföra arbetet
Varje arbetsorder ska automatiskt få ett unikt jobbnummer, och det ska inte vara möjligt att skapa en dubblett. Om en administratör försöker göra en ändring på en befintlig arbetsorder ska systemet först visa en varning om att ändringen kommer att spara över den existerande versionen.
När en arbetsorder skapas ska den automatiskt skickas till den eller de anställda som valts. Anställda ska inte kunna göra ändringar i arbetsordern, men de ska ha möjlighet att skicka en förfrågan till administratören om en uppdatering eller ändring behövs.
Denna struktur skapar en tydlig och effektiv hantering av arbetsordrar, där arbetsfördelningen är smidig och både administratörer och anställda har de funktioner de behöver utan onödigt manuellt arbete







4.	I menyn "Inställningar" ska administratören ha möjlighet att anpassa systemets utseende och varumärkesprofilering. Följande funktioner ska finnas tillgängliga:
•	Ändra färgschema och bakgrundsbild på inloggningssidan för att anpassa systemets utseende efter företagets behov. Bakgrundsbilden ska automatiskt anpassas till olika enheter för en enhetlig upplevelse.
•	Ladda upp och ändra logotyp, så att företagets logga visas på inloggningssidan samt i systemets övre navigationsfält.
•	Profilbild för användare – Om en användare inte har laddat upp en egen bild, ska en standardbild (t.ex. en generisk avatar/gubbe) visas automatiskt.
Dessa inställningar ska vara enkla att ändra och spara, och ändringarna ska träda i kraft direkt utan att behöva starta om systemet.


5.	I menyn "Meddelanden" ska användaren få en översikt över sina meddelanden. Här ska det tydligt framgå om det finns nya meddelanden och hur många som är olästa. Användaren ska även ha möjlighet att radera meddelanden vid behov.
Administratörer ska kunna skicka meddelanden till specifika användare genom en "Skicka meddelande"-knapp. När denna väljs ska en ruta öppnas där administratören kan:
•	Välja mottagare från en lista över registrerade användare
•	Skriva ett kort meddelande
•	Skicka det direkt till användarens meddelandekorg
Anställda kan även skicka meddelanden till administratören, exempelvis vid behov av uppdateringar i en arbetsorder eller tidrapport. Här kan meddelanden skickas till specifika användare via ett enkelt formulär.
6.	Logga ut: Säker utloggning som raderar användarens session och information
o	



Gränssnittet ska vara användarvänligt, responsivt och ha en professionell design estetik för att skapa en smidig och effektiv upplevelse för både administratörer och användare.
Vid borttagning av en användare ska en bekräftelse-popup visas med frågan:
"Är du säker på att du vill ta bort användaren?"
Vid skapande av en ny användare ska ett snyggt och användarvänligt popup-formulär öppnas, där administratören kan fylla i:
Samma redigeringsfunktion ska finnas tillgänglig för användaren själv under sin profil, där de kan uppdatera sin egen information.

Anställdas startsida
När en anställd loggar in ska denne komma till sin personliga startsida, där det visas ett välkomstmeddelande med texten:
"Hej och välkommen [Användarnamn]!"
Här ska även användarens profilbild visas, med möjlighet att ändra bilden vid behov.
Anställda ska ha tillgång till följande undermenyer:
•	Min profil – för att redigera personliga uppgifter och ändra profilbild
•	Se arbetsordrar – för att se tilldelade arbetsuppgifter
•	Rapportera tid – för att logga arbetad tid och raster
•	Meddelanden – för att läsa och skicka meddelanden
•	Logga ut – för att avsluta sessionen säkert
Denna struktur säkerställer att både administratörer och anställda har en effektiv och användarvänlig meddelandehantering, samtidigt som startsidan för anställda blir personlig och välkomnande.
I menyn "Min profil" ska användaren kunna se och uppdatera sin information, inklusive namn, telefonnummer, e-postadress, hemadress, närmaste anhörig och profilbild. Vid uppdatering skickas ett automatiskt meddelande till administratören. Användaren ska även kunna byta profilbild, ändra lösenord med en bekräftelsefunktion samt se sin senaste inloggningstid.
Under "Se arbetsordrar" listas alla arbetsordrar som användaren har tilldelats. Vid klick visas detaljer som arbetsbeskrivning, datum, tid, plats (med länk till Google Maps), kunduppgifter och eventuella medarbetare. Det ska finnas en knapp "Arbete utfört", där en popup-ruta frågar om användaren är säker på att jobbet är klart. Vid bekräftelse låses arbetsordern, markeras med en grön färg och texten "Utfört!" samt flyttas till en undermapp "Färdiga arbeten".
I "Rapportera tid" ska en självuppdaterande kalender visa år, månad, dag, aktuell vecka och veckodag. Orapporterade dagar markeras med en röd prick, och rapporterade med en grön prick. Vid val av en dag öppnas ett formulär där användaren fyller i arbetad tid (07:00-16:00), lunchrast (0, 30, 45 eller 60 min), eventuell övertid och en obligatorisk arbetsbeskrivning. Tidrapporter ska kunna redigeras i efterhand.
I "Meddelanden" ska användaren kunna se nya och olästa meddelanden, samt skicka meddelanden till administratören eller andra användare. 
Slutligen ska en "Logga ut"-knapp säkerställa att användarnamn och lösenord inte sparas vid utloggning.


Lagring på Asustor NAS
•	Alla data, inklusive arbetsordrar och tidrapporter, lagras på din NAS-server.
•	Delad mapp: C:\Users\A-team\Desktop\A07\Asustor EZ\App07

………………………………………………………
Du får lägga till förbättringsförslag som gör systemet bättre o snyggare och lös alla problem du kan stöta på.
Sen har jag lite förbättringar du kan få lägga till 
•	Spåra status: I väntan på godkännande, Pågående, Avslutad, Försenad.
•	Koppla checklistor till arbetsordrar för att säkerställa genomförda åtgärder.
•	Geolokalisering för ökad säkerhet.
•	Automatiska påminnelser vid utebliven rapportering.
•	Påminnelser om arbetsordrar och tidsrapportering.
•	Notifikationer för viktiga händelser i systemet.
•	Systemet föreslår arbetsorder till rätt person baserat på tillgänglighet och expertis.
•	Export av tidrapporter och arbetsorderhistorik till PDF och Excel.
•	Anpassat för datorer, surfplattor och mobiltelefoner.
•	Dynamisk feedback vid åtgärder såsom skapande av arbetsorder eller användare.
jag vill att du hjälper mig bygga vidare på det jag har så det eftersträvar denna beskrivning.
jag har redan en inloggnings sida, admins startsida och sedan början på hantera användare. min mappstruktur ser ut såhär : node_modules, sedan public,views, package-look.json, package.json,server.js. under view har jag adminsidor, users.ejs. admin.ejs, startsidan.ejs. under mappen adminsidor har jag users.ejs. under public har jag mappen användare, admin.css,adminscript.js,script.js och styles.css(för startsidan.ejs), users.css,users.js.
koden för server.js är :
const express = require('express');
const app = express();
const path = require('path');

// Ställ in EJS som view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware för att servera statiska filer
app.use(express.static(path.join(__dirname, 'public')));

// Route för startsidan
app.get('/', (req, res) => {
    res.render('startsidan'); // Rendera startsidan.ejs
});

// Route för administratörssidan
app.get('/admin', (req, res) => {
    res.render('admin'); // Rendera admin.ejs
});

// Route för hantering av användare
app.get('/users', (req, res) => {
    res.render('adminsidor/users'); // Rendera users.ejs
});

// Starta servern
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servern körs på http://localhost:${PORT}`);
});
Koden för startsidan.ejs är: 
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inloggning - Tidrapportering & Orderhantering</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="login-container">
        <div class="clock-container">
            <div class="analog-clock">
                <div class="hour-hand"></div>
                <div class="minute-hand"></div>
                <div class="second-hand"></div>
            </div>
            <div id="digital-clock" class="digital-clock"></div>
        </div>
        <div class="login-box">
            <img src="logo.png" alt="Företagslogga" class="logo" id="login-logo">
            <h1 id="welcome-text">Välkommen!</h1>

            <div class="input-group">
                <i class="fas fa-user"></i>
                <input type="text" id="username" placeholder="Användarnamn" required>
            </div>

            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" id="password" placeholder="Lösenord" required>
            </div>

            <button id="login-button">Logga in</button>
            <a href="#" id="forgot-password">Glömt lösenord?</a>
        </div>

        
    </div>

    <!-- Modal för Glömt Lösenord -->
    <div id="forgot-password-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Återställ lösenord</h2>
            <input type="email" id="reset-email" placeholder="Jobbmejl" required>
            <button id="send-reset-link">Skicka återställningslänk</button>
            <div id="reset-message"></div>

            <!-- Ytterligare ruta för nytt lösenord -->
            <div id="new-password-section" style="display: none;">
                <input type="password" id="new-password" placeholder="Nytt lösenord" required>
                <button id="confirm-new-password">Bekräfta nytt lösenord</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

Admin.ejs är:
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A07Elinstallation - Administration</title>
    <link rel="stylesheet" href="/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="admin-container">
        <!-- Sidhuvud -->
        <header class="admin-header">
            <div class="logo-container">
                <img src="logo.png" alt="A07Elinstallation Logotyp" class="logo">
            </div>
            <h1>A07Elinstallation</h1>
            <p id="current-date-time"></p>
            <button id="logout-btn" class="logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logga ut
            </button>
        </header>

        <!-- Huvudinnehåll -->
        <main class="admin-main">
            <!-- Meny -->
            <nav class="admin-menu">
                <button onclick="window.location.href='/users'">
                    <i class="fas fa-users"></i> Hantera användare
                </button>
                <button onclick="goToPage('time-reports')"><i class="fas fa-clock"></i> Se tider</button>
                <button onclick="goToPage('work-orders')"><i class="fas fa-clipboard-list"></i> Arbetsorder</button>
                <button onclick="goToPage('messages')"><i class="fas fa-envelope"></i> Meddelanden</button>
                <button onclick="goToPage('settings')"><i class="fas fa-cog"></i> Inställningar</button>
            </nav>

            <!-- Dynamiskt innehåll (Visas bara om ingen sida är vald) -->
            <section id="dashboard" class="dashboard">
                <h2>Välkommen Administratör!</h2>
                <p>Här kan du hantera företagets resurser och personal.</p>
                <!-- Statistikpanel -->
                <section class="stats-panel">
                    <div class="stat-box">
                        <h2>Registrerade användare</h2>
                        <p id="user-count">0</p>
                    </div>
                    <div class="stat-box">
                        <h2>Pågående arbetsordrar</h2>
                        <p id="active-orders">0</p>
                    </div>
                    <div class="stat-box">
                        <h2>Nya meddelanden</h2>
                        <p id="new-messages">0</p>
                    </div>
                </section>
            </section>

            <!-- Sidor för varje menyalternativ -->
            <section id="user-management" class="hidden">
                <h2>Hantera användare</h2>
                <!-- Innehåll för Hantera användare -->
            </section>
            <section id="time-reports" class="hidden">
                <h2>Se tider</h2>
                <!-- Innehåll för Se tider -->
            </section>
            <section id="work-orders" class="hidden">
                <h2>Arbetsorder</h2>
                <!-- Innehåll för Arbetsorder -->
            </section>
            <section id="messages" class="hidden">
                <h2>Meddelanden</h2>
                <!-- Innehåll för Meddelanden -->
            </section>
            <section id="settings" class="hidden">
                <h2>Inställningar</h2>
                <!-- Innehåll för Inställningar -->
            </section>
        </main>

        <!-- Sidfot -->
        <footer class="admin-footer">
            © 2025 A07Elinstallation. Alla rättigheter förbehållna.
        </footer>
    </div>

    <!-- JavaScript -->
    <script src="/adminscript.js"></script>
</body>
</html>

Users.ejs är :
<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A07Elinstallation - Hantera Användare</title>
    <link rel="stylesheet" href="users.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="admin-container">
        <!-- Sidhuvud -->
        <header class="admin-header">
            <div class="logo-container">
                <img src="logo.png" alt="A07Elinstallation Logotyp" class="logo">
            </div>
            <h1>A07Elinstallation</h1>
            <p id="current-date-time"></p>
            <button id="logout-btn" class="logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logga ut
            </button>
        </header>

        <!-- Huvudinnehåll -->
        <main class="admin-main">
            <!-- Meny -->
            <nav class="admin-menu">
                <button onclick="goToPage('user-management')"><i class="fas fa-users"></i> Hantera användare</button>
                <button onclick="goToPage('time-reports')"><i class="fas fa-clock"></i> Se tider</button>
                <button onclick="goToPage('work-orders')"><i class="fas fa-clipboard-list"></i> Arbetsorder</button>
                <button onclick="goToPage('messages')"><i class="fas fa-envelope"></i> Meddelanden</button>
                <button onclick="goToPage('settings')"><i class="fas fa-cog"></i> Inställningar</button>
            </nav>

            <!-- Sida för att hantera användare -->
            <section id="user-management" class="content-page">
                <div class="user-management">
                    <div class="user-management-header">
                        <button onclick="window.location.href='/admin'">
                            <i class="fas fa-arrow-left"></i> Tillbaka till Startsidan
                        </button>
                        <h2>Hantera Användare</h2>
                        <p>Här kan du lägga till, redigera och ta bort användare.</p>
                        <button id="add-user-btn" class="add-user-btn">
                            <i class="fas fa-plus"></i> Lägg till ny användare
                        </button>
                    </div>

                    <!-- Användarlista -->
                    <div class="user-list-container">
                        <ul id="user-list" class="user-list">
                            <!-- Användare kommer att listas här -->
                        </ul>
                    </div>
                </div>
            </section>

        </main>

        <!-- Sidfot -->
        <footer class="admin-footer">
            © 2025 A07Elinstallation. Alla rättigheter förbehållna.
        </footer>
    </div>

    <!-- Användardetaljer Modal -->
    <div id="user-details-modal" class="modal">
        <div class="modal-content">
            <span class="close-button" onclick="closeUserDetailsModal()">&times;</span>
            <div id="user-details-content">
                <!-- Användardetaljer kommer att visas här -->
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="users.js"></script>
</body>

</html>

Users.js koden är :
document.addEventListener('DOMContentLoaded', function () {
    // Uppdatera datum och tid
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        document.getElementById('current-date-time').innerText = now.toLocaleDateString('sv-SE', options);
    }
    setInterval(updateDateTime, 1000);

    // Logga ut-funktion
    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.clear();
        window.location.href = '/';
    });

    // Funktion för att navigera till olika sidor
    window.goToPage = function (pageId) {
        // Dölj alla sektioner
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Visa den valda sektionen
        document.getElementById(pageId).classList.remove('hidden');
    };

    // Hämta element
    const userList = document.getElementById('user-list');
    const userDetailsContent = document.getElementById('user-details-content');
    const userDetailsModal = document.getElementById('user-details-modal');

    // Mock-data för användare (inkluderar ålder)
    const users = [{
            id: 1,
            username: 'Adam Andersson',
            email: 'adam.andersson@example.com',
            role: 'Administratör',
            phone: '070-1234567',
            address: 'Exempelgatan 1, 12345 Exempelstad',
            emergencyContact: 'Eva Andersson, 070-7654321',
            gender: 'male',
            profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
            age: 35
        },
        {
            id: 2,
            username: 'Bella Bergström',
            email: 'bella.bergstrom@example.com',
            role: 'Anställd',
            phone: '070-7778899',
            address: 'Mönstervägen 2, 54321 Mönsterstad',
            emergencyContact: 'Karl Bergström, 070-9990000',
            gender: 'female',
            profileImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            age: 28
        },
        {
            id: 3,
            username: 'Carl Carlsson',
            email: 'carl.carlsson@example.com',
            role: 'Projektledare',
            phone: '070-2223344',
            address: 'Testgatan 3, 98765 Teststad',
            emergencyContact: 'Lisa Carlsson, 070-4445566',
            gender: 'male',
            profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
            age: 42
        },
    ];

    // Funktion för att visa användarlistan
    function displayUserList() {
        userList.innerHTML = ''; // Rensa listan

        // Sortera användare i alfabetisk ordning
        const sortedUsers = [...users].sort((a, b) => a.username.localeCompare(b.username));

        sortedUsers.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <i class="fas fa-${user.gender === 'male' ? 'male' : 'female'}"></i>
                <a href="#" onclick="displayUserDetails(${user.id})">${user.username}</a>
            `;
            userList.appendChild(listItem);
        });
    }

    // Funktion för att visa detaljerad användarinfo i modalen
    window.displayUserDetails = function (userId) {
        const user = users.find(user => user.id === userId);

        if (user) {
            userDetailsContent.innerHTML = `
                <h2>${user.username}</h2>
                <img src="${user.profileImage}" alt="Profilbild">
                <p><strong>Roll:</strong> ${user.role}</p> <!-- Lägg till användarens roll -->
                <p><strong>ID:</strong> ${user.id}</p> <!-- Lägg till användarens ID -->
                <p><strong>E-post:</strong> ${user.email}</p>
                <p><strong>Kön:</strong> ${user.gender === 'male' ? 'Man' : 'Kvinna'}</p>
                <p><strong>Ålder:</strong> ${user.age}</p>
                <p><strong>Telefon:</strong> ${user.phone}</p>
                <p><strong>Adress:</strong> ${user.address}</p>
                <p><strong>Närmaste anhörig:</strong> ${user.emergencyContact}</p>
                <button onclick="editUser(${user.id})"><i class="fas fa-edit"></i> Redigera</button>
                <button onclick="deleteUser(${user.id})"><i class="fas fa-trash-alt"></i> Ta bort</button>
                <button onclick="resetPassword(${user.id})"><i class="fas fa-key"></i> Åndra lösenord</button>
            `;
            userDetailsModal.style.display = "block"; // Visa modalen
        } else {
            userDetailsContent.innerHTML = '<p>Användaren hittades inte.</p>';
            userDetailsModal.style.display = "block"; // Visa modalen även om användaren inte hittas
        }
    };

    // Funktion för att stänga modalen
    window.closeUserDetailsModal = function () {
        userDetailsModal.style.display = "none";
    };

    // Funktioner för att hantera användare (placeholder)
    window.editUser = function (userId) {
        alert(`Redigera användare med ID: ${userId}`);
    };

    window.deleteUser = function (userId) {
        if (confirm('Är du säker på att du vill ta bort denna användare?')) {
            alert(`Ta bort användare med ID: ${userId}`);
        }
    };

    window.resetPassword = function (userId) {
        alert(`Återställ lösenord för användare med ID: ${userId}`);
    };

    // Funktion för att lägga till ny användare (placeholder)
    document.getElementById('add-user-btn').addEventListener('click', function () {
        openAddUserPopup();
    });

    // Initialisera sidan
    goToPage('user-management'); // Visa användarhanteringssidan
    displayUserList(); // Visa användarlistan

    const adminContainer = document.querySelector('.admin-container');
    adminContainer.classList.add('fade-in'); // Lägg till fade-in-klassen vid sidladdning
});

// Stäng modalen om användaren klickar utanför den
window.onclick = function (event) {
    if (event.target == document.getElementById('user-details-modal')) {
        document.getElementById('user-details-modal').style.display = "none";
    }
};

// Funktion för att öppna formulär för att lägga till ny användare
function openAddUserPopup() {
    const popupHTML = `
        <div id="addUserPopup" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Lägg till ny användare</h2>
                <form id="addUserForm">
                    <div class="form-row">
                        <label for="username">Användarnamn:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-row">
                        <label for="password">Lösenord:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="form-row">
                        <label for="role">Roll:</label>
                        <select id="role" name="role">
                            <option value="admin">Admin</option>
                            <option value="anställd">Anställd</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="name">Namn:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-row">
                        <label for="email">E-post:</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div class="form-row">
                        <label for="phone">Telefon:</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-row">
                        <label for="address">Adress:</label>
                        <input type="text" id="address" name="address">
                    </div>
                    <button type="submit">Lägg till</button>
                </form>
            </div>
        </div>
    `;

    // Lägg till popup till DOM
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Hantera stängning av popup
    const popup = document.getElementById('addUserPopup');
    const closeBtn = popup.querySelector('.close');
    closeBtn.addEventListener('click', () => popup.remove());

    // Hantera formulärinskick
    const addUserForm = document.getElementById('addUserForm');
    addUserForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validering
        if (!this.username.value || !this.password.value || !this.name.value) {
            alert('Vänligen fyll i alla obligatoriska fält.');
            return;
        }

        // Skapa ny användare
        const newUser = {
            id: generateId(), // Generera unikt ID
            username: this.username.value,
            password: this.password.value,
            role: this.role.value,
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            address: this.address.value,
        };

        // Lägg till användaren i arrayen
        users.push(newUser);

        // Uppdatera användarlistan
        displayUserList();

        // Stäng popup
        popup.remove();
    });

    // Visa popup
    popup.style.display = 'block';
}

// Funktion för att generera unikt ID
function generateId() {
    return Math.floor(Math.random() * 1000000);
}

Users.css har koden:
/* Generella stilar */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

/* Anpassning av färger */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
}

/* Administrationscontainer */
.admin-container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Sidhuvud */
.admin-header {
    text-align: center;
    background: linear-gradient(to right, #007bff, #ff7a00);
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.admin-header h1 {
    margin: 0;
    font-size: 2em;
}

#current-date-time {
    font-size: 1rem;
}

.logo-container {
    display: flex;
    justify-content: center;
}

.logo {
    max-width: 100px;
}

/* Logga ut-knapp */
.logout-btn {
    background-color: var(--danger-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
}

.logout-btn:hover {
    background-color: #c82333;
    transform: translateY(-2px);
}

/* Meny */
.admin-menu {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
}

.admin-menu button {
    background: linear-gradient(to right, #007bff, #ff7a00);
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    flex: 1;
    margin: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.admin-menu button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Sidinnehåll */
.content-page {
    margin-top: 20px;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Lägg till användare-knapp */
.add-user-btn {
    background-color: var(--success-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s, transform 0.2s;
    margin-bottom: 20px;
    margin-top: 10px;
}

.add-user-btn:hover {
    background-color: #218838;
    transform: translateY(-2px);
}

/* Användarlista */
.user-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.user-list li {
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}

.user-list li:hover {
    background-color: #f1f1f1;
}

.user-list li:last-child {
    border-bottom: none;
}

.user-list a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1.1rem;
    margin-left: 10px;
}

.user-list a:hover {
    color: #0056b3;
    text-decoration: underline;
}

/* Modal stilar */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 2% auto;
    padding: 10px;
    border: 1px solid #888;
    width: 50%;
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 10px;
}

/* Modalens innehåll */
.modal-content p {
    margin: 5px 0; /* Minska vertikalt utrymme mellan rader */
    line-height: 1.0; /* Justera radavståndet */
}

.modal-content h2 {
    margin-bottom: 10px; /* Minska avståndet under rubriken */
}

.modal-content img {
    margin: 10px 0; /* Minska avståndet runt bilden */
    max-width: 100px; /* Begränsa bildens storlek */
    border-radius: 50%; /* Gör bilden rund */
}

.modal-content button {
    margin: 5px 5px 0 0; /* Minska avståndet mellan knapparna */
}

/* Animations för att visa modalen */
@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

/* Stäng-knappen */
.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Användardetaljer i modalen */
#user-details-content {
    padding: 20px;
}

#user-details-content h2 {
    color: var(--primary-color);
    margin-bottom: 20px;
}

#user-details-content p {
    margin-bottom: 10px;
}

#user-details-content img {
    max-width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

/* Ikoner */
.fas {
    margin-right: 8px;
}

/* Flexbox-layout för användarhantering */
.user-management {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

/* Behåll text och knapp till vänster */
.user-management-header {
    flex: 1;
}

/* Användarlistan till höger */
.user-list-container {
    flex: 1;
    max-height: 400px; /* Begränsa höjden */
    overflow-y: auto; /* Gör listan scrollbar */
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    background-color: #f8f9fa;
}

Styles.css koden är:
/* Generella stilar */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Dölj overflow för att undvika scrollbars */
}

/* Bakgrund och container */
.login-container {
    background-image: url('background.jpg'); /* Ändra till din bild */
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

/* Clock Container */
.clock-container {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Analog klocka */
.analog-clock {
    width: 150px;
    height: 150px;
    border: 4px solid #333;
    border-radius: 50%;
    position: relative;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hour-hand,
.minute-hand,
.second-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 50% 100%; /* Rotera från mitten av basen */
    transform: translate(-50%, -100%) rotate(0deg); /* Initial position */
    transition: transform 0.05s linear; /* Smidig rörelse */
}

.hour-hand {
    width: 6px;
    height: 40px;
    background-color: #333;
    border-radius: 3px;
}

.minute-hand {
    width: 4px;
    height: 60px;
    background-color: #666;
    border-radius: 2px;
}

.second-hand {
    width: 2px;
    height: 70px;
    background-color: red;
    border-radius: 1px;
}

/* Digital klocka */
.digital-clock {
    font-size: 1.5em;
    color: #333;
    text-align: center;
    margin-top: 10px;
}

/* Login Box */
.login-box {
    background-color: rgba(255, 255, 255, 0.9); /* Transparent bakgrund */
    padding: 50px;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 400px;
    transition: transform 0.3s ease-in-out;
}

.login-box:hover {
    transform: scale(1.03);
}

/* Logotyp */
.logo {
    max-width: 180px;
    margin-bottom: 30px;
    animation: fadeIn 1s ease-in-out;
}

/* Rubrik */
h1 {
    color: #343a40;
    margin-bottom: 40px;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing: 1px;
    animation: slideInDown 0.8s ease-in-out;
}

/* Input Fields */
.input-group {
    position: relative;
    margin-bottom: 30px;
}

.input-group i {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #777;
    font-size: 1.2em;
    transition: color 0.3s;
}

input[type="text"],
input[type="password"],
input[type="email"] {
    width: 100%;
    padding: 15px 45px;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 1.1em;
    transition: border-color 0.3s;
    background-color: #f7f7f7;
    color: #333;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

/* Knappar */
button {
    background-color: #5cb85c;
    color: white;
    padding: 16px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 1.2em;
    transition: background-color 0.3s, transform 0.2s;
    font-weight: 500;
    letter-spacing: 0.5px;
}

button:hover {
    background-color: #4cae4c;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Länk */
a {
    color: #5bc0de;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    transition: color 0.3s;
}

a:hover {
    color: #46b8da;
    text-decoration: underline;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border: none;
    width: 80%;
    max-width: 500px;
    border-radius: 15px;
    position: relative;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    transition: color 0.3s;
}

.close-button:hover {
    color: #000;
}

/* Responsiva stilar */
@media (max-width: 600px) {
    .login-box {
        width: 90%;
        padding: 40px;
    }

    h1 {
        font-size: 2em;
    }

    .digital-clock {
        font-size: 1.1em;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"] {
        font-size: 1em;
    }

    button {
        font-size: 1.1em;
    }
}

/* Animationer */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInDown {
    from {
        transform: translateY(-50px);
    }
    to {
        transform: translateY(0);
    }
}

/* Anpassning av färger */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
}

/* Fokus stilar för input-fält */
input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(var(--primary-color-rgb), 0.5);
}

Script.js har koden:
document.addEventListener('DOMContentLoaded', function () {
    // Funktion för att uppdatera digital klocka
    function updateDigitalClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Funktion för att uppdatera analog klocka
    function updateAnalogClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourRotation = (hours % 12 + minutes / 60) * 30; // 360° / 12 timmar
        const minuteRotation = (minutes + seconds / 60) * 6;  // 360° / 60 minuter
        const secondRotation = seconds * 6;                  // 360° / 60 sekunder

        document.querySelector('.hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
        document.querySelector('.minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
        document.querySelector('.second-hand').style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
    }

    // Uppdatera klockorna varje sekund
    setInterval(() => {
        updateDigitalClock();
        updateAnalogClock();
    }, 1000);

    // Kör direkt vid sidladdning
    updateDigitalClock();
    updateAnalogClock();

    // Variabler
    const loginButton = document.getElementById('login-button');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeButton = document.querySelector('.close-button');
    const resetEmailInput = document.getElementById('reset-email');
    const sendResetLinkButton = document.getElementById('send-reset-link');
    const resetMessageDiv = document.getElementById('reset-message');
    const newPasswordSection = document.getElementById('new-password-section');
    const newPasswordInput = document.getElementById('new-password');
    const confirmNewPasswordButton = document.getElementById('confirm-new-password');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginLogo = document.getElementById('login-logo');
    const welcomeText = document.getElementById('welcome-text');

    // Variabler för analoga klockan
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // Dummy-data för användare (kan ersättas med riktig data från server)
    const users = [
        { id: 1, username: 'admin', password: 'A07123', role: 'admin', name: 'Admin', email: 'admin@example.com' },
        { id: 2, username: 'user1', password: 'password', role: 'employee', name: 'Användare Ett', email: 'user1@example.com' }
    ];

    // Funktion för att hantera inloggning
    function handleLogin() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            if (user.role === 'admin') {
                // Redirect till administratörssidan
                window.location.href = '/admin';
            } else if (user.role === 'employee') {
                // Redirect till användarsidan
                window.location.href = '/user';
            }
        } else {
            alert('Fel användarnamn eller lösenord.');
        }
    }

    // Lägg till klickhändelse på logga in-knappen
    loginButton.addEventListener('click', handleLogin);

    // Lägg till keydown-händelse för Enter-tangenten
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleLogin();
        }
    });

    // Funktion för att visa "Glömt lösenord"-modal
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });

    // Funktion för att stänga modal
    closeButton.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
        resetMessageDiv.textContent = ''; // Rensa meddelandet
        newPasswordSection.style.display = 'none'; // Dölj "Nytt lösenord"-sektionen
    });

    // Funktion för att stänga modal genom att klicka utanför
    window.addEventListener('click', function(event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
            resetMessageDiv.textContent = ''; // Rensa meddelandet
            newPasswordSection.style.display = 'none'; // Dölj "Nytt lösenord"-sektionen
        }
    });

    // Funktion för att skicka återställningslänk
    sendResetLinkButton.addEventListener('click', function() {
        const email = resetEmailInput.value;
        const user = users.find(user => user.email === email);

        if (user) {
            resetMessageDiv.textContent = 'En återställningslänk har skickats till din e-postadress.';
            resetMessageDiv.style.color = 'green';
            newPasswordSection.style.display = 'block'; // Visa "Nytt lösenord"-sektionen
        } else {
            resetMessageDiv.textContent = 'Ingen användare hittades med den e-postadressen.';
            resetMessageDiv.style.color = 'red';
            newPasswordSection.style.display = 'none'; // Dölj "Nytt lösenord"-sektionen
        }
    });

    // Funktion för att bekräfta nytt lösenord
    confirmNewPasswordButton.addEventListener('click', function() {
        const newPassword = newPasswordInput.value;
        // Här ska du implementera logiken för att spara det nya lösenordet
        alert('Ditt nya lösenord har sparats.');
        forgotPasswordModal.style.display = 'none';
        resetMessageDiv.textContent = ''; // Rensa meddelandet
        newPasswordSection.style.display = 'none'; // Dölj "Nytt lösenord"-sektionen
    });
});

Adminscript.js har koden:
document.addEventListener('DOMContentLoaded', function () {
    // Uppdatera datum och tid
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        document.getElementById('current-date-time').innerText = now.toLocaleDateString('sv-SE', options);
    }
    setInterval(updateDateTime, 1000);

    // Exempeldata för statistik
    const users = [
        { id: 1, username: 'Admin', role: 'Administratör' },
        { id: 2, username: 'Användare Ett', role: 'Anställd' },
        { id: 3, username: 'Användare Två', role: 'Anställd' },
    ];
    const workOrders = [
        { id: 1, title: 'Installera eluttag' },
        { id: 2, title: 'Reparera belysning' },
    ];
    const messages = [
        { id: 1, content: 'Meddelande 1' },
        { id: 2, content: 'Meddelande 2' },
        { id: 3, content: 'Meddelande 3' },
    ];

    // Funktion för att uppdatera statistiken
       function loadAdminDashboard() {
        // Uppdatera antalet användare
        document.getElementById('user-count').innerText = users.length;

        // Uppdatera antalet arbetsordrar
        document.getElementById('active-orders').innerText = workOrders.length;

        // Uppdatera antalet nya meddelanden
        document.getElementById('new-messages').innerText = messages.length;
    }

    updateStats();

    // Logga ut-funktion
    document.getElementById('logout-btn').addEventListener('click', function () {
        // Rensa lokal lagring (om du använder den)
        localStorage.clear();

        // Redirect till inloggningssidan
        window.location.href = '/'; // Ersätt med din inloggningssida
    });

    // Funktion för att navigera till olika sidor
    window.goToPage = function (pageId) {
        // Dölj alla sektioner
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Visa den valda sektionen
        document.getElementById(pageId).classList.remove('hidden');
    };

    const dynamicContent = document.getElementById('dynamic-content');

    // Funktion för att ladda en sida dynamiskt
    window.loadPage = function (url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Något gick fel vid laddning av sidan.');
                }
                return response.text();
            })
            .then(html => {
                dynamicContent.innerHTML = html; // Ladda innehållet i sektionen
            })
            .catch(error => {
                console.error('Fel:', error);
                dynamicContent.innerHTML = '<p>Det gick inte att ladda sidan.</p>';
            });
    };

    // Funktion för att gå tillbaka till dashboard
    window.goBack = function () {
        dynamicContent.innerHTML = ''; // Töm sektionen för dynamiskt innehåll
    };
});

Admin.css hark od :
/* Globala stilar */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #f0f4f8, #d9e4ec);
    color: #333;
    overflow-x: hidden;
}

/* Administrationscontainer */
.admin-container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Sidhuvud */
.admin-header {
    text-align: center;
    background: linear-gradient(to right, #007bff, #ff7a00);
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.admin-header h1 {
    margin: 0;
    font-size: 2em;
}

#current-date-time {
    font-size: 1rem;
}

.logo-container {
    display: flex;
    justify-content: center;
}

.logo {
    max-width: 100px;
}

/* Logga ut-knapp */
.logout-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
}

.logout-btn:hover {
    background-color: #c82333;
    transform: translateY(-2px);
}

/* Statistikpanel */
.stats-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.stat-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #007bff;
}

.stat-box h2 {
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #555;
}

.stat-box p {
    font-size: 2rem;
    color: #007bff;
}

/* Meny */
.admin-menu {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
}

.admin-menu button {
    background: linear-gradient(to right, #007bff, #ff7a00);
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    flex: 1;
    margin: 0 5px; /* Lägg till lite mellanrum mellan knapparna */
    white-space: nowrap; /* Förhindra textbrytning */
    overflow: hidden; /* Dölj överflödig text */
    text-overflow: ellipsis; /* Lägg till punkter om texten är för lång */
}

.admin-menu button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Hidden section */
.hidden {
    display: none;
}

/* Dashboard */
.dashboard {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Användarlista */
.user-list {
    list-style-type: none;
    padding: 0;
}

.user-list li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-list li:last-child {
    border-bottom: none;
}

.user-list button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
}

/* Ikoner */
.fas {
    margin-right: 8px;
}

#dynamic-content {
    margin-top: 20px;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
}


Dessa är det jag skapat än så länge. Kan du kolla igenom allt och förbättra det som du tycker behöver förbättras sedan hjälpa mig skapa vidare mitt system efter min beskrivning av systemet i början?
Jag har fastnat på hantera användare. Jag hittade ett annat system som har den dessa koder i html, css och javascript för att lägga till nya användare och visa antal användare i admin sidan. 
Html: 
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tidsrapportering & Orderhantering</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app">
        <div id="login-page" class="page active">
            <div class="login-container">
                <div class="login-header">
                    <img id="company-logo" src="path/to/logo.png" alt="Företagslogotyp">
                    <h1>Välkommen</h1>
                </div>
                <form id="login-form">
                    <div class="input-group">
                        <i class="fas fa-user"></i>
                        <input type="text" id="username" placeholder="Användarnamn" required>
                    </div>
                    <div class="input-group">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" placeholder="Lösenord" required>
                    </div>
                    <button type="submit">Logga in</button>
                </form>
                <div class="login-footer">
                    <a href="#">Glömt lösenordet?</a>
                </div>
            </div>
        </div>

        <div id="admin-page" class="page">
            <header>
                <h1>Administratörspanel</h1>
                <nav>
                    <ul>
                        <li><a href="#" data-section="dashboard">Dashboard</a></li>
                        <li><a href="#" data-section="manage-users">Hantera användare</a></li>
                        <li><a href="#" data-section="create-order">Skapa arbetsorder</a></li>
                        <li><a href="#" data-section="view-times">Se tider</a></li>
                        <li><a href="#" data-section="settings">Inställningar</a></li>
                        <li><a href="#" data-section="messages">Meddelanden</a></li>
                        <li><a href="#" id="admin-logout">Logga ut</a></li>
                    </ul>
                </nav>
            </header>

            <main id="admin-content">
                <section id="dashboard" class="admin-section">
                    <h2>Dashboard</h2>
                    <div class="dashboard-stats">
                        <div class="stat-card">
                            <h3>Registrerade användare</h3>
                            <p id="user-count">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Pågående arbetsordrar</h3>
                            <p id="active-orders">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Nya meddelanden</h3>
                            <p id="new-messages">0</p>
                        </div>
                    </div>
                    <div id="current-datetime"></div>
                </section>

                <section id="manage-users" class="admin-section">
                    <h2>Hantera användare</h2>
                    <button id="add-user-btn">Lägg till ny användare</button>
                    <div id="user-list">
                        <!-- Användarlista kommer att genereras dynamiskt här -->
                    </div>
                </section>

                <section id="create-order" class="admin-section">
                    <h2>Skapa arbetsorder</h2>
                    <form id="create-order-form">
                        <input type="date" id="order-date" required>
                        <input type="time" id="order-start-time" required>
                        <input type="time" id="order-end-time" required>
                        <input type="text" id="order-location" placeholder="Plats" required>
                        <input type="text" id="order-customer" placeholder="Kundinformation" required>
                        <select id="order-workplace-type">
                            <option value="">Välj typ av arbetsplats</option>
                            <option value="office">Kontor</option>
                            <option value="construction">Byggarbetsplats</option>
                            <option value="home">Hemma hos kund</option>
                        </select>
                        <textarea id="order-description" placeholder="Arbetsbeskrivning" required></textarea>
                        <select id="order-employees" multiple>
                            <!-- Lista över anställda kommer att genereras dynamiskt här -->
                        </select>
                        <button type="submit">Skapa arbetsorder</button>
                    </form>
                    <div id="order-list">
                        <!-- Lista över arbetsordrar kommer att genereras dynamiskt här -->
                    </div>
                </section>

                <section id="view-times" class="admin-section">
                    <h2>Se tider</h2>
                    <div id="time-report-filters">
                        <select id="employee-filter">
                            <option value="">Alla anställda</option>
                            <!-- Lista över anställda kommer att genereras dynamiskt här -->
                        </select>
                        <input type="date" id="date-filter">
                    </div>
                    <div id="time-report-list">
                        <!-- Tidrapporter kommer att genereras dynamiskt här -->
                    </div>
                    <div id="time-report-calendar">
                        <!-- Kalendervy kommer att genereras dynamiskt här -->
                    </div>
                </section>

                <section id="settings" class="admin-section">
                    <h2>Inställningar</h2>
                    <form id="settings-form">
                        <label for="primary-color">Primär färg:</label>
                        <input type="color" id="primary-color">
                        <label for="secondary-color">Sekundär färg:</label>
                        <input type="color" id="secondary-color">
                        <label for="background-image">Bakgrundsbild:</label>
                        <input type="file" id="background-image" accept="image/*">
                        <label for="logo-upload">Ladda upp logotyp:</label>
                        <input type="file" id="logo-upload" accept="image/*">
                        <button type="submit">Spara inställningar</button>
                    </form>
                </section>

                <section id="messages" class="admin-section">
                    <h2>Meddelanden</h2>
                    <form id="send-message-form">
                        <select id="message-recipient" required>
                            <option value="">Välj mottagare</option>
                            <!-- Lista över användare/grupper kommer att genereras dynamiskt här -->
                        </select>
                        <textarea id="message-content" placeholder="Skriv ditt meddelande här" required></textarea>
                        <button type="submit">Skicka meddelande</button>
                    </form>
                    <div id="message-list">
                        <!-- Meddelandelista kommer att genereras dynamiskt här -->
                    </div>
                </section>
            </main>
        </div>

        <div id="user-page" class="page">
            <header>
                <h1>Användarportal</h1>
                <nav>
                    <ul>
                        <li><a href="#" data-section="user-profile">Min profil</a></li>
                        <li><a href="#" data-section="view-orders">Se arbetsordrar</a></li>
                        <li><a href="#" data-section="report-time">Rapportera tid</a></li>
                        <li><a href="#" data-section="user-messages">Meddelanden</a></li>
                        <li><a href="#" id="user-logout">Logga ut</a></li>
                    </ul>
                </nav>
            </header>

            <main id="user-content">
                <section id="user-profile" class="user-section">
                    <h2>Min profil</h2>
                    <form id="update-profile-form">
                        <img id="user-profile-picture" src="path/to/default-profile-picture.png" alt="Profilbild">
                        <input type="file" id="profile-picture-upload" accept="image/*">
                        <input type="text" id="user-name" placeholder="Namn" required>
                        <input type="email" id="user-email" placeholder="E-post" required>
                        <input type="tel" id="user-phone" placeholder="Telefonnummer">
                        <input type="text" id="user-id-number" placeholder="ID-nummer" required>
                        <input type="text" id="user-emergency-contact" placeholder="Närmaste anhörig">
                        <button type="submit">Uppdatera profil</button>
                    </form>
                </section>

                <section id="view-orders" class="user-section">
                    <h2>Se arbetsordrar</h2>
                    <div id="user-order-list">
                        <!-- Lista över användarens arbetsordrar kommer att genereras dynamiskt här -->
                    </div>
                </section>

                <section id="report-time" class="user-section">
                    <h2>Rapportera tid</h2>
                    <div id="time-report-calendar">
                        <!-- Kalendervy för tidrapportering kommer att genereras dynamiskt här -->
                    </div>
                    <form id="time-report-form">
                        <input type="date" id="report-date" required>
                        <input type="time" id="start-time" required>
                        <input type="time" id="end-time" required>
                        <input type="time" id="break-duration" placeholder="Rasttid (HH:MM)" required>
                        <button type="submit">Rapportera tid</button>
                    </form>
                </section>

                <section id="user-messages" class="user-section">
                    <h2>Meddelanden</h2>
                    <form id="user-send-message-form">
                        <select id="user-message-recipient" required>
                            <option value="admin">Administratör</option>
                            <!-- Andra användare kan läggas till här om det behövs -->
                        </select>
                        <textarea id="user-message-content" placeholder="Skriv ditt meddelande här" required></textarea>
                        <button type="submit">Skicka meddelande</button>
                    </form>
                    <div id="user-message-list">
                        <!-- Meddelandelista kommer att genereras dynamiskt här -->
                    </div>
                </section>
            </main>
        </div>
    </div>

    <!-- Modaler -->
    <div id="confirm-modal" class="modal">
        <div class="modal-content">
            <h2>Bekräftelse</h2>
            <p id="confirm-message"></p>
            <button id="confirm-yes">Ja</button>
            <button id="confirm-no">Nej</button>
        </div>
    </div>

    <div id="add-user-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Lägg till ny användare</h2>
            <form id="add-user-form">
                <input type="text" id="new-user-name" placeholder="Namn" required>
                <input type="email" id="new-user-email" placeholder="E-post" required>
                <input type="password" id="new-user-password" placeholder="Lösenord" required>
                <select id="new-user-role" required>
                    <option value="">Välj roll</option>
                    <option value="admin">Administratör</option>
                    <option value="employee">Anställd</option>
                </select>
                <input type="tel" id="new-user-phone" placeholder="Telefonnummer">
                <input type="text" id="new-user-id-number" placeholder="ID-nummer" required>
                <input type="text" id="new-user-emergency-contact" placeholder="Närmaste anhörig">
                <input type="file" id="new-user-profile-picture" accept="image/*">
                <button type="submit">Lägg till användare</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
Css:
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #ecf0f1;
    --text-color: #34495e;
    --error-color: #e74c3c;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Se till att sidan täcker hela skärmen */
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.page {
    display: none;
}

.page.active {
    display: block;
}

/* Styling för inloggningssidan */
#login-page {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.login-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 400px;
    text-align: center;
}

.login-header {
    margin-bottom: 30px;
}

.login-header img {
    width: 150px;
    margin-bottom: 20px;
}

.login-header h1 {
    color: var(--text-color);
    font-size: 2.5em;
    margin: 0;
}

#login-form {
    display: flex;
    flex-direction: column;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-color);
    opacity: 0.7;
}

#login-form input {
    padding: 15px 40px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    margin: 5px 0;
    font-size: 1em;
    color: var(--text-color);
    width: 100%;
    box-sizing: border-box;
}

#login-form input:focus {
    outline: none;
    border-color: var(--secondary-color);
}

#login-form button {
    background-color: var(--primary-color);
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.1em;
}

#login-form button:hover {
    background-color: var(--secondary-color);
}

.login-footer {
    margin-top: 20px;
}

.login-footer a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9em;
}

/* Övrig styling */
h1 {
    color: var(--primary-color);
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
}

input, button {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
}

button {
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--secondary-color);
}

nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    background-color: var(--primary-color);
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: block;
}

nav ul li a:hover {
    background-color: var(--secondary-color);
}

#admin-content, #user-content {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-card {
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

.order-card {
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

.completed {
    background-color: rgba(46, 204, 113, 0.2);
}

.calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.calendar-day {
    border: 1px solid var(--text-color);
    padding: 5px;
    text-align: center;
    cursor: pointer;
}

.calendar-day.reported {
    background-color: var(--secondary-color);
    color: white;
}

.calendar-day.not-reported {
    background-color: var(--error-color);
    color: white;
}

@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin-bottom: 5px;
    }
}

/* The Modal (background) */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Form Styling */
#addUserForm .form-row {
    margin-bottom: 10px;
}

#addUserForm label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

#addUserForm input,
#addUserForm select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

#addUserForm button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#addUserForm button:hover {
    background-color: #45a049;
}
Js:
// Globala variabler
let currentUser = null;
let users = [
    { id: 1, username: 'admin', password: 'A07123', role: 'admin', name: 'Admin', email: 'admin@example.com', phone: '123456789', address: 'Admin Street 1', emergencyContact: 'Emergency Admin', emergencyPhone: '987654321', color: '#3498db', profilePic: 'https://example.com/admin.jpg' }
];
let workOrders = [];
let timeReports = [];
let messages = [];

// Hjälpfunktioner
function $(selector) {
    return document.querySelector(selector);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    $(`#${pageId}`).classList.add('active');
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Inloggningsfunktioner
$('#login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = $('#username').value;
    const password = $('#password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        if (user.role === 'admin') {
            showPage('admin-page');
            loadAdminDashboard();
        } else {
            showPage('user-page');
            loadUserDashboard();
        }
    } else {
        alert('Felaktigt användarnamn eller lösenord');
    }
    this.reset();
});

// Admin-funktioner
function loadAdminDashboard() {
    const content = `
        <h2>Dashboard</h2>
        <p>Antal användare: ${users.length}</p>
        <p>Antal arbetsordrar: ${workOrders.length}</p>
        <p>Datum: ${new Date().toLocaleDateString()}</p>
        <p>Tid: ${new Date().toLocaleTimeString()}</p>
    `;
    $('#admin-content').innerHTML = content;
}

function loadManageUsers() {
    let content = `
        <h2>Hantera användare</h2>
        <button id="add-user">Lägg till användare</button>
        <div id="user-list">
    `;
    users.forEach(user => {
        if (user.username !== 'admin') {
            content += `
                <div class="user-card" style="border-color: ${user.color}">
                    <img src="${user.profilePic}" alt="${user.name}" width="50">
                    <h3>${user.name}</h3>
                    <p>Roll: ${user.role}</p>
                    <p>E-post: ${user.email}</p>
                    <p>Telefon: ${user.phone}</p>
                    <button onclick="editUser('${user.id}')">Redigera</button>
                    <button onclick="deleteUser('${user.id}')">Ta bort</button>
                    <button onclick="resetPassword('${user.id}')">Återställ lösenord</button>
                </div>
            `;
        }
    });
    content += '</div>';
    $('#admin-content').innerHTML = content;

    $('#add-user').addEventListener('click', openAddUserPopup);
}

function openAddUserPopup() {
    let popupHTML = `
        <div id="addUserPopup" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Lägg till ny användare</h2>
                <form id="addUserForm">
                    <div class="form-row">
                        <label for="username">Användarnamn:</label>
                        <input type="text" id="username" name="username" required>
                    </div>

                    <div class="form-row">
                        <label for="password">Lösenord:</label>
                        <input type="password" id="password" name="password" required>
                    </div>

                    <div class="form-row">
                        <label for="role">Roll:</label>
                        <select id="role" name="role">
                            <option value="admin">Admin</option>
                            <option value="anställd">Anställd</option>
                        </select>
                    </div>

                    <div class="form-row">
                        <label for="name">Namn:</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="form-row">
                        <label for="email">E-post:</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="form-row">
                        <label for="phone">Telefon:</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-row">
                        <label for="address">Adress:</label>
                        <input type="text" id="address" name="address">
                    </div>

                    <div class="form-row">
                        <label for="emergencyContact">Närmaste anhörig:</label>
                        <input type="text" id="emergencyContact" name="emergencyContact">
                    </div>

                    <div class="form-row">
                        <label for="emergencyPhone">Telefon anhörig:</label>
                        <input type="tel" id="emergencyPhone" name="emergencyPhone">
                    </div>

                    <div class="form-row">
                        <label for="color">Färg (hex-kod):</label>
                        <input type="color" id="color" name="color">
                    </div>

                    <div class="form-row">
                        <label for="profilePic">Profilbild URL:</label>
                        <input type="url" id="profilePic" name="profilePic">
                    </div>

                    <button type="submit">Lägg till</button>
                </form>
            </div>
        </div>
    `;

    // Lägg till popup till DOM
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Hantera stängning av popup
    const popup = $('#addUserPopup');
    const closeBtn = popup.querySelector('.close');
    closeBtn.addEventListener('click', () => popup.remove());

    // Hantera formulärinskick
    const addUserForm = $('#addUserForm');
    addUserForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validering
        if (!this.username.value || !this.password.value || !this.name.value) {
            alert('Vänligen fyll i alla obligatoriska fält.');
            return;
        }

        const newUser = {
            id: generateId(),
            username: this.username.value,
            password: this.password.value,
            role: this.role.value,
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            address: this.address.value,
            emergencyContact: this.emergencyContact.value,
            emergencyPhone: this.emergencyPhone.value,
            color: this.color.value,
            profilePic: this.profilePic.value
        };

        users.push(newUser);
        loadManageUsers();
        popup.remove();
    });
    // Make the modal visible
    const modal = document.getElementById("addUserPopup");
    modal.style.display = "block";
}

function editUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.name = prompt('Ange nytt namn:', user.name);
        user.email = prompt('Ange ny e-postadress:', user.email);
        user.phone = prompt('Ange nytt telefonnummer:', user.phone);
        user.address = prompt('Ange ny hemadress:', user.address);
        user.emergencyContact = prompt('Ange ny närmaste anhörig:', user.emergencyContact);
        user.emergencyPhone = prompt('Ange nytt telefonnummer till närmaste anhörig:', user.emergencyPhone);
        user.color = prompt('Ange ny färg (hex-kod):', user.color);
        user.profilePic = prompt('Ange ny URL till profilbild:', user.profilePic);
        loadManageUsers();
    }
}

function deleteUser(userId) {
    if (confirm('Är du säker på att du vill ta bort användaren?')) {
        users = users.filter(u => u.id !== userId);
        loadManageUsers();
    }
}

function resetPassword(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.password = generateId();
        alert(`Lösenordet har återställts för ${user.name}. Nytt lösenord: ${user.password}`);
    }
}

function loadCreateOrder() {
    const content = `
        <h2>Skapa arbetsorder</h2>
        <form id="create-order-form">
            <input type="date" id="order-date" required>
            <input type="number" id="order-hours" placeholder="Antal timmar" required>
            <input type="text" id="order-address" placeholder="Adress" required>
            <input type="text" id="order-customer" placeholder="Kund" required>
            <input type="tel" id="order-phone" placeholder="Telefonnummer" required>
            <select id="order-type" required>
                <option value="house">Hus</option>
                <option value="apartment">Lägenhet</option>
                <option value="store">Affär</option>
                <option value="office">Kontor</option>
                <option value="industry">Industri</option>
            </select>
            <textarea id="order-description" placeholder="Arbetsbeskrivning" required></textarea>
            <select id="order-assignee" multiple required>
                ${users.filter(u => u.role !== 'admin').map(u => `<option value="${u.id}">${u.name}</option>`).join('')}
            </select>
            <button type="submit">Skapa arbetsorder</button>
        </form>
    `;
    $('#admin-content').innerHTML = content;

    $('#create-order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const newOrder = {
            id: generateId(),
            date: $('#order-date').value,
            hours: $('#order-hours').value,
            address: $('#order-address').value,
            customer: $('#order-customer').value,
            phone: $('#order-phone').value,
            type: $('#order-type').value,
            description: $('#order-description').value,
            assignees: Array.from($('#order-assignee').selectedOptions).map(option => option.value),
            status: 'ej påbörjad'
        };
        workOrders.push(newOrder);
        alert('Arbetsorder skapad!');
        this.reset();
    });
}

// Funktion för att kontrollera om två datum är i samma vecka
function isSameWeek(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const weekNumber1 = getWeekNumber(d1);
    const weekNumber2 = getWeekNumber(d2);
    return (
        d1.getFullYear() === d2.getFullYear() &&
        weekNumber1 === weekNumber2
    );
}

// Funktion för att få veckonummer
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function loadViewTimes() {
    let content = `
        <h2>Se tider</h2>
        <div id="time-summary">
            <p>Totalt rapporterade timmar denna vecka: ${calculateTotalHours('week')} timmar</p>
            <p>Totalt rapporterade timmar denna månad: ${calculateTotalHours('month')} timmar</p>
        </div>
        <div id="employee-times">
    `;
    users.filter(u => u.role !== 'admin').forEach(user => {
        content += `
            <div class="user-time-card">
                <h3>${user.name}</h3>
                <p>Ordinarie arbetstid: ${calculateUserHours(user.id, 'ordinary')} timmar</p>
                <p>Övertid: ${calculateUserHours(user.id, 'overtime')} timmar</p>
                <button onclick="viewUserTimeDetails('${user.id}')">Se detaljer</button>
            </div>
        `;
    });
    content += '</div>';
    $('#admin-content').innerHTML = content;
}

function calculateTotalHours(period) {
    const now = new Date();
    let totalHours = 0;

    timeReports.forEach(report => {
        const reportDate = new Date(report.date);
        if (period === 'week' && isSameWeek(now, reportDate)) {
            totalHours += report.hours;
        } else if (period === 'month' && now.getMonth() === reportDate.getMonth() && now.getFullYear() === reportDate.getFullYear()) {
            totalHours += report.hours;
        }
    });

    return totalHours;
}

function calculateUserHours(userId, type) {
    let totalHours = 0;
    timeReports.forEach(report => {
        if (report.userId === userId) {
            if (type === 'ordinary' && report.hours <= 8) {
                totalHours += report.hours;
            } else if (type === 'overtime' && report.hours > 8) {
                totalHours += report.hours - 8;
            }
        }
    });
    return totalHours;
}

function viewUserTimeDetails(userId) {
    const userReports = timeReports.filter(report => report.userId === userId);
    let content = `<h2>Tidsrapportering för ${users.find(u => u.id === userId).name}</h2>`;
    
    userReports.forEach(report => {
        content += `
            <div class="time-report">
                <p>Datum: ${report.date}</p>
                <p>Rapporterade timmar: ${report.hours}</p>
                <p>Arbetsbeskrivning: ${report.description}</p>
                <button onclick="editTimeReport('${report.id}')">Redigera</button>
            </div>
        `;
    });
    $('#admin-content').innerHTML = content;
}

function editTimeReport(reportId) {
    const report = timeReports.find(r => r.id === reportId);
    if (report) {
        const newHours = prompt('Ange nya timmar:', report.hours);
        const newDescription = prompt('Ange ny arbetsbeskrivning:', report.description);

        if (newHours !== null && newDescription !== null) {
            report.hours = parseInt(newHours, 10);
            report.description = newDescription;
            alert(`Tidsrapporten har uppdaterats!`);
            loadViewTimes();
        }
    }
}

// Meddelandefunktioner
function loadMessages() {
    let content = '<h2>Meddelanden</h2>';
    messages.forEach(message => {
        content += `
            <div class="message">
                <p>Från: ${message.sender}</p>
                <p>Meddelande: ${message.text}</p>
                <button onclick="deleteMessage('${message.id}')">Radera</button>
            </div>
        `;
    });
    $('#admin-content').innerHTML = content;
}

function deleteMessage(messageId) {
    messages = messages.filter(message => message.id !== messageId);
    loadMessages();
}

function sendMessage(recipientId, text) {
    const newMessage = {
        id: generateId(),
        sender: currentUser.name,
        recipient: recipientId,
        text
    };
    messages.push(newMessage);
}

// Inställningar
function loadSettings() {
    const content = `
        <h2>Inställningar</h2>
        <label for="background-color">Bakgrundsfärg:</label>
        <input type="color" id="background-color" value="${getComputedStyle(document.body).backgroundColor}">
        <label for="text-color">Textfärg:</label>
        <input type="color" id="text-color" value="${getComputedStyle(document.body).color}">
        <button onclick="applySettings()">Spara ändringar</button>
    `;
    $('#admin-content').innerHTML = content;
}

function applySettings() {
    const backgroundColor = $('#background-color').value;
    const textColor = $('#text-color').value;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    alert('Inställningar sparade!');
}

// Användarfunktioner
function loadUserDashboard() {
    const content = `
        <h2>Välkommen, ${currentUser.name}!</h2>
        <p>Här är din personliga översikt.</p>
    `;
    $('#user-content').innerHTML = content;
}

function loadUserProfile() {
    const content = `
        <h2>Min profil</h2>
        <p>Namn: ${currentUser.name}</p>
        <p>E-post: ${currentUser.email}</p>
        <p>Telefon: ${currentUser.phone}</p>
    `;
    $('#user-content').innerHTML = content;
}

// Funktion för att visa användarens arbetsordrar
function loadUserOrders() {
    const userOrders = workOrders.filter(order => order.assignees.includes(currentUser.id));
    let content = '<h2>Mina arbetsordrar</h2>';
    userOrders.forEach(order => {
        content += `
            <div class="order-card">
                <p>Datum: ${order.date}</p>
                <p>Adress: ${order.address}</p>
                <p>Kund: ${order.customer}</p>
                <p>Beskrivning: ${order.description}</p>
                <p>Status: ${order.status}</p>
            </div>
        `;
    });
    $('#user-content').innerHTML = content;
}

// Händelselyssnare för navigering
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.dataset.section) {
        e.preventDefault();
        const section = e.target.dataset.section;

        // Hantera admin-sektioner
        if (e.target.closest('#admin-page')) {
            $('#admin-content').innerHTML = ''; // Rensa innehållet
            switch (section) {
                case 'dashboard':
                    loadAdminDashboard();
                    break;
                case 'manage-users':
                    loadManageUsers();
                    break;
                case 'create-order':
                    loadCreateOrder();
                    break;
                case 'view-times':
                    loadViewTimes();
                    break;
                case 'messages':
                    loadMessages();
                    break;
                case 'settings':
                    loadSettings();
                    break;
                default:
                    $('#admin-content').innerHTML = '<h2>Sidan hittades inte</h2>';
            }
        }

        // Hantera användar-sektioner
        if (e.target.closest('#user-page')) {
            $('#user-content').innerHTML = ''; // Rensa innehållet
            switch (section) {
                case 'user-profile':
                    loadUserProfile();
                    break;
                case 'view-orders':
                    loadUserOrders();
                    break;
                case 'report-time':
                    $('#user-content').innerHTML = '<h2>Rapportera tid (kommer snart)</h2>';
                    break;
                case 'user-messages':
                    $('#user-content').innerHTML = '<h2>Meddelanden (kommer snart)</h2>';
                    break;
                default:
                    $('#user-content').innerHTML = '<h2>Sidan hittades inte</h2>';
            }
        }
    }

    // Hantera utloggning
    if (e.target.id === 'admin-logout' || e.target.id === 'user-logout') {
        e.preventDefault();
        currentUser = null;
        showPage('login-page');
    }
});

// Initialisera appen
showPage('login-page');
jag vill bara använda funktionen till mitt system eller använda något liknande. Kan du skapa det?
