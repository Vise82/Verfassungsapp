// app.js

let aktuelleVerfassung = null;
let vergleichstestAntworten = {};

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    initVergleichstestSelects();
});

// Navigation
function zeigeHauptmenu() {
    versteckeAlle();
    document.getElementById('hauptmenu').classList.remove('hidden');
}

function versteckeAlle() {
    document.querySelectorAll('.container').forEach(el => el.classList.add('hidden'));
}

// Lernkarten anzeigen
function zeigeLernkarten(schluessel) {
    versteckeAlle();
    aktuelleVerfassung = VERFASSUNGEN[schluessel];
    
    const container = document.getElementById('karten-container');
    container.classList.remove('hidden');
    
    document.getElementById('karten-titel').textContent = aktuelleVerfassung.titel;
    
    renderLernkarten();
    renderTest();
    
    wechselTab('lernkarten');
}

function renderLernkarten() {
    const liste = document.getElementById('karten-liste');
    liste.innerHTML = '';
    liste.className = 'karten-liste';
    
    aktuelleVerfassung.karten.forEach((karte, index) => {
        const karteEl = document.createElement('div');
        karteEl.className = 'karte';
        karteEl.onclick = () => karteEl.classList.toggle('flipped');
        
        karteEl.innerHTML = `
            <div class="karte-inner">
                <div class="karte-front">
                    <p>${karte.frage}</p>
                </div>
                <div class="karte-back">
                    <p>${karte.antwort}</p>
                </div>
            </div>
        `;
        
        liste.appendChild(karteEl);
    });
}

function renderTest() {
    const liste = document.getElementById('test-liste');
    liste.innerHTML = '';
    
    aktuelleVerfassung.test.forEach((frage, index) => {
        const frageEl = document.createElement('div');
        frageEl.className = 'test-frage';
        
        frageEl.innerHTML = `
            <span class="afb-badge">AFB ${frage.afb}</span>
            <h4>${index + 1}. ${frage.frage}</h4>
            <textarea placeholder="Deine Antwort..." id="antwort-${index}"></textarea>
            <button class="btn-loesung" onclick="toggleLoesung(${index})">Musterlösung anzeigen</button>
            <div class="loesung hidden" id="loesung-${index}">
                <h5>Musterlösung:</h5>
                <p>${frage.loesung}</p>
            </div>
        `;
        
        liste.appendChild(frageEl);
    });
}

function toggleLoesung(index) {
    const loesung = document.getElementById(`loesung-${index}`);
    loesung.classList.toggle('hidden');
}

function wechselTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    
    if (tab === 'lernkarten') {
        document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('lernkarten-view').classList.remove('hidden');
    } else {
        document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
        document.getElementById('test-view').classList.remove('hidden');
    }
}

// Vergleichstabelle
function zeigeVergleich() {
    versteckeAlle();
    document.getElementById('vergleich-container').classList.remove('hidden');
    renderVergleichstabelle();
}

function renderVergleichstabelle() {
    const tabelle = document.getElementById('vergleich-tabelle');
    
    const kriterien = [
        { key: 'kontext', label: 'Historischer Kontext' },
        { key: 'staatsform', label: 'Staatsform' },
        { key: 'wahlrecht', label: 'Wahlrecht' },
        { key: 'gewaltenteilung', label: 'Gewaltenteilung' },
        { key: 'grundrechte', label: 'Grundrechte' },
        { key: 'besonderheiten', label: 'Besonderheiten' },
        { key: 'organe', label: 'Verfassungsorgane' }
    ];
    
    // Reihenfolge der Verfassungen festlegen
    const reihenfolge = [
        'frankreich1791',
        'frankreich1793',
        'paulskirche1849',
        'kaiserreich1871',
        'weimar1919',
        'grundgesetz1949'
    ];
    
    let html = '<thead><tr><th>Kriterium</th>';
    
    // Spaltenüberschriften in fester Reihenfolge
    reihenfolge.forEach(key => {
        const v = VERFASSUNGEN[key];
        html += `<th>${v.titel}</th>`;
    });
    
    html += '</tr></thead><tbody>';
    
    // Zeilen für jedes Kriterium
    kriterien.forEach(krit => {
        html += `<tr><td><strong>${krit.label}</strong></td>`;
        reihenfolge.forEach(key => {
            const v = VERFASSUNGEN[key];
            html += `<td>${v.compare[krit.key] || '-'}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody>';
    tabelle.innerHTML = html;
}


// Wahlsysteme
function zeigeWahlsysteme() {
    versteckeAlle();
    document.getElementById('wahlsysteme-container').classList.remove('hidden');
    renderWahlsysteme();
}

function renderWahlsysteme() {
    const tabelle = document.getElementById('wahlsysteme-tabelle');
    
    const wahlsysteme = [
        { verfassung: 'Frankreich 1791', typ: 'Zensuswahlrecht', berechtigt: '15%', besonderheit: 'Nur Aktivbürger (Steuerzahler)' },
        { verfassung: 'Frankreich 1793', typ: 'Allgemeines Männerwahlrecht', berechtigt: '45%', besonderheit: 'Alle Männer ab 21 Jahren' },
        { verfassung: 'Paulskirche 1849', typ: 'Allgemeines Männerwahlrecht', berechtigt: '42%', besonderheit: 'Männer ab 25 Jahren' },
        { verfassung: 'Kaiserreich 1871', typ: 'Allg. Männerwahlrecht (Reichstag)', berechtigt: '43%', besonderheit: 'Dreiklassenwahlrecht in Preußen' },
        { verfassung: 'Weimar 1919', typ: 'Allgemeines Wahlrecht', berechtigt: '100%', besonderheit: 'Frauen- und Männerwahlrecht ab 20' },
        { verfassung: 'Grundgesetz 1949', typ: 'Allgemeines Wahlrecht', berechtigt: '100%', besonderheit: 'Ab 18 Jahren (seit 1970)' }
    ];
    
    let html = `
        <thead>
            <tr>
                <th>Verfassung</th>
                <th>Wahlrechtstyp</th>
                <th>Wahlberechtigt (ca.)</th>
                <th>Besonderheit</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    wahlsysteme.forEach(w => {
        html += `
            <tr>
                <td><strong>${w.verfassung}</strong></td>
                <td>${w.typ}</td>
                <td>${w.berechtigt}</td>
                <td>${w.besonderheit}</td>
            </tr>
        `;
    });
    
    html += '</tbody>';
    tabelle.innerHTML = html;
    
    // Chart rendern
    renderWahlberechtigungChart(wahlsysteme);
}

function renderWahlberechtigungChart(wahlsysteme) {
    const chart = document.getElementById('wahlberechtigung-chart');
    let html = '';
    
    wahlsysteme.forEach(w => {
        const prozent = parseInt(w.berechtigt);
        html += `
            <div class="chart-bar">
                <div class="chart-label">${w.verfassung}</div>
                <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: ${prozent}%; background: linear-gradient(90deg, var(--secondary), var(--primary));">
                        <span style="color: white; padding-left: 10px; line-height: 40px; font-weight: 600;">${w.berechtigt}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    chart.innerHTML = html;
}

// Vergleichstest
function zeigeVergleichstest() {
    versteckeAlle();
    document.getElementById('vergleichstest-container').classList.remove('hidden');
    document.getElementById('vergleichstest-auswahl').classList.remove('hidden');
    document.getElementById('vergleichstest-fragen').classList.add('hidden');
    document.getElementById('vergleichstest-auswertung').classList.add('hidden');
}

function initVergleichstestSelects() {
    const select1 = document.getElementById('verfassung1');
    const select2 = document.getElementById('verfassung2');
    
    Object.keys(VERFASSUNGEN).forEach(key => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = VERFASSUNGEN[key].titel;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = VERFASSUNGEN[key].titel;
        select2.appendChild(option2);
    });
}

function starteVergleichstest() {
    const v1 = document.getElementById('verfassung1').value;
    const v2 = document.getElementById('verfassung2').value;
    
    if (!v1 || !v2) {
        alert('Bitte wähle zwei Verfassungen aus.');
        return;
    }
    
    if (v1 === v2) {
        alert('Bitte wähle zwei unterschiedliche Verfassungen.');
        return;
    }
    
    vergleichstestAntworten = { v1, v2, antworten: {} };
    
    document.getElementById('vergleichstest-auswahl').classList.add('hidden');
    document.getElementById('vergleichstest-fragen').classList.remove('hidden');
    
    renderVergleichstestFragen(v1, v2);
}

function renderVergleichstestFragen(v1, v2) {
    const container = document.getElementById('vergleichstest-fragen');
    const verf1 = VERFASSUNGEN[v1];
    const verf2 = VERFASSUNGEN[v2];
    
    const fragen = [
        {
            id: 'demokratisierung',
            text: `Vergleiche den Demokratisierungsgrad von ${verf1.titel} und ${verf2.titel}. Welche Verfassung war demokratischer und warum?`,
            loesung: `Vergleich: ${verf1.compare.staatsform} vs. ${verf2.compare.staatsform}. Wahlrecht: ${verf1.compare.wahlrecht} vs. ${verf2.compare.wahlrecht}. Gewaltenteilung und Grundrechte beachten.`
        },
        {
            id: 'wahlrecht',
            text: `Analysiere die Unterschiede im Wahlrecht zwischen beiden Verfassungen. Welche gesellschaftlichen Gruppen waren jeweils ausgeschlossen?`,
            loesung: `${verf1.titel}: ${verf1.compare.wahlrecht}. ${verf2.titel}: ${verf2.compare.wahlrecht}. Ausschlüsse beachten (Frauen, Besitzlose, Altersgrenze).`
        },
        {
            id: 'gewaltenteilung',
            text: `Beurteile die Qualität der Gewaltenteilung in beiden Verfassungen. Wo lagen strukturelle Schwächen?`,
            loesung: `${verf1.titel}: ${verf1.compare.gewaltenteilung}. ${verf2.titel}: ${verf2.compare.gewaltenteilung}. Schwächen identifizieren.`
        },
        {
            id: 'schwaechen',
            text: `Erläutere die zentralen Schwächen beider Verfassungen, die zu ihrem Scheitern bzw. zu Problemen führten.`,
            loesung: `${verf1.titel}: ${verf1.compare.besonderheiten}. ${verf2.titel}: ${verf2.compare.besonderheiten}. Historischen Kontext einbeziehen.`
        }
    ];
    
    let html = `<h3>Vergleich: ${verf1.titel} ↔ ${verf2.titel}</h3>`;
    
    fragen.forEach((frage, index) => {
        html += `
            <div class="test-frage">
                <h4>${index + 1}. ${frage.text}</h4>
                <textarea id="vtest-${frage.id}" placeholder="Deine Antwort..."></textarea>
                <button class="btn-loesung" onclick="toggleVergleichstestLoesung('${frage.id}')">Musterlösung anzeigen</button>
                <div class="loesung hidden" id="vtest-loesung-${frage.id}">
                    <h5>Musterlösung:</h5>
                    <p>${frage.loesung}</p>
                </div>
            </div>
        `;
    });
    
    html += '<button class="btn-primary" onclick="beendeVergleichstest()" style="margin-top: 1.5rem;">Test abschließen</button>';
    
    container.innerHTML = html;
}

function toggleVergleichstestLoesung(id) {
    const loesung = document.getElementById(`vtest-loesung-${id}`);
    loesung.classList.toggle('hidden');
}

function beendeVergleichstest() {
    const antworten = ['demokratisierung', 'wahlrecht', 'gewaltenteilung', 'schwaechen'];
    let beantwortet = 0;
    
    antworten.forEach(id => {
        const antwort = document.getElementById(`vtest-${id}`).value.trim();
        if (antwort) beantwortet++;
    });
    
    document.getElementById('vergleichstest-fragen').classList.add('hidden');
    document.getElementById('vergleichstest-auswertung').classList.remove('hidden');
    
    const auswertung = document.getElementById('vergleichstest-auswertung');
    auswertung.innerHTML = `
        <h3>Auswertung</h3>
        <div style="background: var(--bg); padding: 2rem; border-radius: 10px; text-align: center;">
            <p style="font-size: 1.2rem; margin-bottom: 1rem;">Du hast <strong>${beantwortet} von 4</strong> Fragen beantwortet.</p>
            <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                ${beantwortet === 4 ? 'Ausgezeichnet! Du hast alle Fragen bearbeitet.' : 
                  beantwortet >= 2 ? 'Gut gemacht! Versuche beim nächsten Mal alle Fragen zu beantworten.' :
                  'Versuche mehr Fragen zu beantworten, um dein Wissen zu vertiefen.'}
            </p>
            <button class="btn-primary" onclick="zeigeVergleichstest()">Neuer Vergleich</button>
            <button class="btn-back" onclick="zeigeHauptmenu()" style="margin-left: 1rem;">Zum Hauptmenü</button>
        </div>
    `;
}
