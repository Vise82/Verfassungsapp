// daten.js - TEIL 1: Frankreich 1791

const VERFASSUNGEN = {
    frankreich1791: {
        titel: 'Frankreich 1791',
        karten: [
            {
                frage: 'Welche Staatsform etablierte die Verfassung von 1791?',
                antwort: 'Konstitutionelle Monarchie mit Gewaltenteilung zwischen König (Exekutive) und Nationalversammlung (Legislative).'
            },
            {
                frage: 'Wie war das Wahlrecht in der Verfassung von 1791 geregelt?',
                antwort: 'Zensuswahlrecht: Nur männliche "Aktivbürger" ab 25 Jahren, die eine bestimmte Steuerleistung erbrachten, waren wahlberechtigt (ca. 15% der Bevölkerung).'
            },
            {
                frage: 'Welche Rolle hatte der König in der Verfassung von 1791?',
                antwort: 'Der König besaß ein suspensives (aufschiebendes) Veto gegen Gesetze, konnte aber nicht dauerhaft blockieren. Er ernannte Minister, war aber nicht parlamentarisch verantwortlich.'
            },
            {
                frage: 'Wie war die Gewaltenteilung organisiert?',
                antwort: 'Legislative: Einkammer-Nationalversammlung (745 Abgeordnete). Exekutive: König mit Ministern (keine Ministerverantwortung). Judikative: Gewählte Richter auf Zeit.'
            },
            {
                frage: 'Was war die Assemblée nationale législative?',
                antwort: 'Die gesetzgebende Nationalversammlung mit 745 Abgeordneten, gewählt durch Aktivbürger. Sie hatte das alleinige Gesetzgebungsrecht, der König nur suspensives Veto.'
            },
            {
                frage: 'Welche Grundrechte garantierte die Verfassung?',
                antwort: 'Bezug auf die Menschen- und Bürgerrechtserklärung von 1789: Freiheit, Eigentum, Sicherheit, Widerstand gegen Unterdrückung. Gleichheit vor dem Gesetz.'
            },
            {
                frage: 'Wie funktionierte das suspensive Veto des Königs?',
                antwort: 'Der König konnte Gesetze aufschieben, aber nicht dauerhaft verhindern. Nach zwei weiteren Legislaturperioden konnte das Gesetz auch ohne königliche Zustimmung in Kraft treten.'
            },
            {
                frage: 'Warum scheiterte die Verfassung von 1791?',
                antwort: 'Fluchtversuch des Königs (Varennes), außenpolitische Spannungen, radikale Jakobiner forderten Republik, Krieg gegen Österreich/Preußen, Sturz der Monarchie 1792.'
            },
            {
                frage: 'Welche sozialen Spannungen blieben ungelöst?',
                antwort: 'Ausschluss der "Passivbürger" vom Wahlrecht, keine soziale Gleichstellung, Spannungen zwischen Bürgertum und Unterschichten (Sans-Culottes).'
            },
            {
                frage: 'Wie lange war die Verfassung von 1791 in Kraft?',
                antwort: 'Nur etwa ein Jahr (September 1791 bis August 1792), dann Sturz der Monarchie und Ausrufung der Republik.'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Nenne die drei Gewalten in der Verfassung von 1791 und ihre Träger.',
                loesung: 'Legislative: Nationalversammlung (Einkammersystem, 745 Abgeordnete, gewählt durch Aktivbürger). Exekutive: König mit Ministern (keine Ministerverantwortung gegenüber Parlament). Judikative: Gewählte Richter auf Zeit (nicht vom König ernannt).'
            },
            {
                afb: 2,
                frage: 'Erkläre den Unterschied zwischen Aktiv- und Passivbürgern und analysiere die gesellschaftlichen Folgen dieser Unterscheidung.',
                loesung: 'Aktivbürger: Männer ab 25 mit ausreichender Steuerleistung (mindestens 3 Arbeitstage Steuerwert), wahlberechtigt (ca. 4,3 Mio.). Passivbürger: Besitzlose, Frauen, Unterschichten ohne Wahlrecht. Folgen: Soziale Spaltung, Unzufriedenheit der Ausgeschlossenen, Radikalisierung der Sans-Culottes, Legitimationsdefizit. Widerspruch zu "Gleichheit" der Menschenrechtserklärung führte zu Forderung nach demokratischerer Verfassung.'
            },
            {
                afb: 3,
                frage: 'Beurteile, inwieweit die Verfassung von 1791 den Idealen der Aufklärung und der Revolution von 1789 gerecht wurde.',
                loesung: 'Pro: Gewaltenteilung nach Montesquieu, Grundrechtskatalog, Abschaffung absoluter Monarchie, Rechtsstaatlichkeit, Volkssouveränität (eingeschränkt). Contra: Zensuswahlrecht widerspricht Gleichheitsideal, König behält zu viel Macht (Veto, Ministerernennung), keine Volkssouveränität im vollen Sinne, soziale Ungleichheit bleibt bestehen. Fazit: Kompromiss zwischen Aufklärung und monarchischer Tradition, der radikalen Revolutionären nicht weit genug ging. Bürgertum sicherte eigene Macht ab.'
            }
        ],
        compare: {
            kontext: 'Französische Revolution 1789, Versuch der Stabilisierung nach Sturm auf Bastille',
            staatsform: 'Konstitutionelle Monarchie',
            wahlrecht: 'Zensuswahlrecht (nur Aktivbürger, ca. 15%)',
            gewaltenteilung: 'Legislative (Nationalversammlung, 745 Abg.), Exekutive (König, Minister ohne Parlamentsverantwortung), Judikative (gewählte Richter); suspensives Veto des Königs',
            grundrechte: 'Bezug auf Erklärung von 1789: Freiheit, Eigentum, Sicherheit, Gleichheit vor Gesetz',
            besonderheiten: 'Scheiterte 1792 durch Radikalisierung, Krieg, Flucht des Königs; keine Ministerverantwortung',
            organe: 'Assemblée nationale législative (745 Abg., Einkammer), König (Exekutive, suspensives Veto), Minister (vom König ernannt), gewählte Richter'
        }
    },
    
    frankreich1793: {
        titel: 'Frankreich 1793',
        karten: [
            {
                frage: 'Welche Staatsform etablierte die Verfassung von 1793?',
                antwort: 'Demokratische Republik mit starker Volkssouveränität, Einkammer-Parlament (Konvent), ohne Gewaltenteilung im klassischen Sinne.'
            },
            {
                frage: 'Wie war das Wahlrecht geregelt?',
                antwort: 'Allgemeines Männerwahlrecht ab 21 Jahren, ohne Zensus. Deutlich demokratischer als 1791, aber Frauen weiterhin ausgeschlossen.'
            },
            {
                frage: 'Was war der Nationalkonvent?',
                antwort: 'Einkammer-Parlament mit legislativen und exekutiven Befugnissen. Gewählt durch allgemeines Männerwahlrecht. Faktisch dominiert von Jakobinern und dem Wohlfahrtsausschuss.'
            },
            {
                frage: 'Welche Rolle spielte der Wohlfahrtsausschuss?',
                antwort: 'Exekutivorgan mit 12 Mitgliedern, gewählt vom Konvent. Unter Robespierre faktische Regierung während der Terreur. Koordinierte Kriegsführung und innere Sicherheit.'
            },
            {
                frage: 'Was war der Sicherheitsausschuss?',
                antwort: 'Überwachungsorgan für innere Sicherheit, Verfolgung von "Feinden der Revolution". Arbeitete eng mit Wohlfahrtsausschuss zusammen. Instrument der Terreur.'
            },
            {
                frage: 'Welche Grundrechte wurden garantiert?',
                antwort: 'Erweiterte Grundrechte: Recht auf Arbeit, Bildung, Unterstützung für Bedürftige. Widerstandsrecht gegen Tyrannei. Soziale Rechte stärker betont als 1791.'
            },
            {
                frage: 'Warum trat die Verfassung nie in Kraft?',
                antwort: 'Wegen des Kriegszustands und innerer Bedrohungen wurde sie suspendiert. Stattdessen: Revolutionsregierung und Terreur (1793-1794).'
            },
            {
                frage: 'Was war die Terreur?',
                antwort: 'Phase der Schreckensherrschaft (1793-94) unter Robespierre: Massenhinrichtungen politischer Gegner, Verdächtigengesetz, Revolutionstribunale. Ca. 40.000 Todesopfer. Ende mit Robespierres Sturz (Thermidor).'
            },
            {
                frage: 'Welche demokratischen Elemente enthielt die Verfassung?',
                antwort: 'Allgemeines Männerwahlrecht, Volkssouveränität, Referenden bei Verfassungsänderungen, Widerstandsrecht, soziale Rechte. Fortschrittlichste Verfassung ihrer Zeit.'
            },
            {
                frage: 'Warum gilt die Verfassung als historisch bedeutsam, obwohl sie nie umgesetzt wurde?',
                antwort: 'Sie formulierte erstmals umfassende demokratische und soziale Rechte, beeinflusste spätere Verfassungen und demokratische Bewegungen weltweit. Vorbild für Sozialdemokratie.'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Beschreibe die wichtigsten Unterschiede im Wahlrecht zwischen der Verfassung von 1791 und 1793.',
                loesung: '1791: Zensuswahlrecht, nur Aktivbürger mit Steuerleistung (ca. 15%), ab 25 Jahren. 1793: Allgemeines Männerwahlrecht ab 21 Jahren, kein Zensus, deutlich demokratischer (ca. 45% der Bevölkerung). Beide: Ausschluss der Frauen.'
            },
            {
                afb: 2,
                frage: 'Erkläre das Paradox, dass die demokratischste Verfassung Frankreichs in der Phase der Terreur entstand, aber nie in Kraft trat.',
                loesung: 'Kontext: Krieg gegen europäische Koalition, Bürgerkrieg (Vendée), Bedrohung der Revolution. Jakobiner suspendierten Verfassung zugunsten Revolutionsregierung. Terreur als "Notstandsmaßnahme" gegen innere/äußere Feinde. Wohlfahrtsausschuss unter Robespierre faktische Diktatur. Paradox: Demokratische Ideale (Verfassung) vs. autoritäre Praxis (Terreur). Zeigt Spannung zwischen revolutionärem Idealismus und Machterhalt. Tugendterror: Demokratie sollte durch Gewalt erzwungen werden.'
            },
            {
                afb: 3,
                frage: 'Beurteile die historische Bedeutung der Verfassung von 1793 trotz ihrer Nicht-Umsetzung.',
                loesung: 'Bedeutung: Erste Verfassung mit sozialen Grundrechten (Arbeit, Bildung, Unterstützung). Vorbild für sozialdemokratische Bewegungen des 19. Jh. (Chartisten, 1848er). Zeigt Radikalisierung der Revolution. Widerspruch: Demokratische Theorie vs. totalitäre Praxis der Terreur. Langfristig: Inspiration für demokratische Verfassungen (Weimar, soziale Rechte), aber auch Warnung vor revolutionärer Gewalt und Tugendterror. Symbolwert für linke Bewegungen. Historisch wichtiger als praktisch wirksam.'
            }
        ],
        compare: {
            kontext: 'Radikale Phase der Revolution, Krieg gegen Europa, Jakobinerherrschaft, Terreur 1793-94',
            staatsform: 'Demokratische Republik, Volkssouveränität, Einkammersystem',
            wahlrecht: 'Allgemeines Männerwahlrecht ab 21 Jahren (ca. 45%), Referenden bei Verfassungsänderungen',
            gewaltenteilung: 'Nationalkonvent (Legislative + Exekutive), Wohlfahrtsausschuss (12 Mitglieder, faktische Regierung), Sicherheitsausschuss (Überwachung); keine klassische Gewaltenteilung',
            grundrechte: 'Erweitert: Recht auf Arbeit, Bildung, Unterstützung; Widerstandsrecht gegen Tyrannei; soziale Rechte',
            besonderheiten: 'Nie in Kraft getreten (suspendiert wegen Krieg); Terreur-Phase; demokratischste Verfassung der Epoche; Vorbild für Sozialdemokratie',
            organe: 'Nationalkonvent (Einkammer-Parlament), Wohlfahrtsausschuss (Comité de salut public, 12 Mitglieder), Sicherheitsausschuss (Comité de sûreté générale), Revolutionstribunale'
        }
    },

    paulskirche1849: {
        titel: 'Paulskirche 1849',
        karten: [
            {
                frage: 'Welche Staatsform sah die Paulskirchenverfassung vor?',
                antwort: 'Konstitutionelle Monarchie mit erblichem Kaiser ("Kaiser der Deutschen"), aber starkem Parlament (Reichstag) und Ministerverantwortung.'
            },
            {
                frage: 'Wie war das Wahlrecht geregelt?',
                antwort: 'Allgemeines, gleiches, direktes Männerwahlrecht ab 25 Jahren für das Volkshaus. Deutlich fortschrittlicher als zeitgenössische Systeme.'
            },
            {
                frage: 'Was war die Ministerverantwortung (§101)?',
                antwort: 'Minister waren dem Reichstag verantwortlich und konnten von diesem zur Rechenschaft gezogen werden. Wichtiger Schritt zum Parlamentarismus.'
            },
            {
                frage: 'Welche Grundrechte wurden garantiert?',
                antwort: 'Umfassender Grundrechtskatalog (§§130-189): Meinungs-, Presse-, Versammlungsfreiheit, Gleichheit vor Gesetz, Abschaffung Adelsprivilegien, Religionsfreiheit. Einklagbar vor Reichsgericht.'
            },
            {
                frage: 'Was war das Zweikammersystem?',
                antwort: 'Volkshaus: Direkt gewählt nach allgemeinem Männerwahlrecht. Staatenhaus: Vertreter der Einzelstaaten, teils gewählt, teils ernannt. Beide Kammern gleichberechtigt.'
            },
            {
                frage: 'Was war die "deutsche Frage" in der Paulskirche?',
                antwort: 'Streit zwischen kleindeutscher Lösung (ohne Österreich, unter Preußen) und großdeutscher Lösung (mit Österreich). Paulskirche entschied sich für kleindeutsch.'
            },
            {
                frage: 'Welche Rolle hatte das Reichsgericht?',
                antwort: 'Oberstes Gericht zur Wahrung der Grundrechte und Verfassung. Bürger konnten Grundrechtsverletzungen einklagen - fortschrittlich für die Zeit.'
            },
            {
                frage: 'Welche Befugnisse hatte der Kaiser?',
                antwort: 'Erblicher Kaiser, Ernennung der Reichsminister, Oberbefehl über Reichsheer, suspensives Veto (aufschiebend), Vertretung nach außen. Aber: Ministerverantwortung gegenüber Reichstag.'
            },
            {
                frage: 'Warum scheiterte die Paulskirchenverfassung?',
                antwort: 'Preußenkönig Friedrich Wilhelm IV. lehnte Kaiserkrone ab ("Krone aus der Gosse"). Fehlende Machtmittel der Nationalversammlung, Restauration durch Fürsten, militärische Niederschlagung.'
            },
            {
                frage: 'Welche langfristige Bedeutung hatte die Paulskirchenverfassung?',
                antwort: 'Vorbild für spätere deutsche Verfassungen (Weimar, Grundgesetz). Grundrechtskatalog beeinflusste demokratische Entwicklung. Symbol demokratischer Tradition in Deutschland.'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Nenne drei zentrale Grundrechte der Paulskirchenverfassung.',
                loesung: 'Meinungs- und Pressefreiheit, Versammlungsfreiheit, Gleichheit vor dem Gesetz, Religionsfreiheit, Abschaffung der Adelsprivilegien, Freizügigkeit (beliebig drei nennen).'
            },
            {
                afb: 2,
                frage: 'Analysiere die Bedeutung der Ministerverantwortung (§101) für die Entwicklung zum Parlamentarismus.',
                loesung: '§101: Minister dem Reichstag verantwortlich, nicht nur dem Kaiser. Bedeutung: Schritt vom monarchischen Prinzip zum parlamentarischen System. Reichstag erhält Kontrolle über Regierung. Vorbild für Weimarer Republik und Grundgesetz. Damals revolutionär, da Fürsten Macht abgeben müssten. Unterschied zu späterem Kaiserreich (keine Ministerverantwortung).'
            },
            {
                afb: 3,
                frage: 'Beurteile, warum die Paulskirchenverfassung trotz ihres Scheiterns als "Geburtsstunde der deutschen Demokratie" gilt.',
                loesung: 'Pro: Erste gesamtdeutsche demokratische Verfassung, fortschrittlicher Grundrechtskatalog, allgemeines Männerwahlrecht, Ministerverantwortung, Gewaltenteilung, einklagbare Grundrechte. Symbolwert: Demokratische Tradition von unten. Langfristig: Vorbild für Weimar und GG. Contra: Scheiterte politisch, nie umgesetzt, blieb Papier. Fazit: Trotz Scheitern wichtiges demokratisches Erbe, das nachwirkte und Legitimation für spätere Demokratiebewegungen bot. Zeigt: Demokratie war deutsche Tradition, nicht nur Import nach 1945.'
            }
        ],
        compare: {
            kontext: 'Revolution 1848/49, Nationalversammlung in Frankfurt, Scheitern an Fürstenwiderstand',
            staatsform: 'Konstitutionelle Monarchie mit starkem Parlament',
            wahlrecht: 'Allgemeines, gleiches, direktes Männerwahlrecht ab 25 Jahren',
            gewaltenteilung: 'Zweikammersystem (Volkshaus direkt gewählt, Staatenhaus Ländervertreter), Kaiser (erblich, suspensives Veto), Reichsminister (§101 Parlamentsverantwortung), Reichsgericht',
            grundrechte: 'Umfassender Katalog (§§130-189), einklagbar vor Reichsgericht; Meinungs-, Presse-, Versammlungsfreiheit, Gleichheit, Abschaffung Adelsprivilegien',
            besonderheiten: 'Scheiterte 1849 (König lehnte ab); Vorbild für spätere Verfassungen; kleindeutsche Lösung; erste demokratische Gesamtverfassung',
            organe: 'Volkshaus (direkt gewählt, allg. Männerwahlrecht), Staatenhaus (Ländervertreter), Kaiser (erblich), Reichsminister (mit Parlamentsverantwortung §101), Reichsgericht (Grundrechteschutz)'
        }
    },

    kaiserreich1871: {
        titel: 'Deutsches Kaiserreich 1871',
        karten: [
            {
                frage: 'Welche Staatsform hatte das Deutsche Kaiserreich?',
                antwort: 'Konstitutionelle Monarchie, bundesstaatlich organisiert (25 Einzelstaaten), mit starker Stellung Preußens und des Kaisers.'
            },
            {
                frage: 'Wie war das Wahlrecht zum Reichstag geregelt?',
                antwort: 'Allgemeines, gleiches, geheimes, direktes Männerwahlrecht ab 25 Jahren. Fortschrittlich für die Zeit, aber: Dreiklassenwahlrecht in Preußen blieb.'
            },
            {
                frage: 'Was war das Dreiklassenwahlrecht in Preußen?',
                antwort: 'Wahlrecht nach Steueraufkommen: Wähler in drei Klassen eingeteilt. Obere Klassen (Reiche) hatten überproportionales Gewicht. Undemokratisch, begünstigte Konservative.'
            },
            {
                frage: 'Welche Rolle hatte der Reichskanzler?',
                antwort: 'Vom Kaiser ernannt, nicht vom Reichstag. Keine parlamentarische Verantwortung. Reichskanzler war meist auch preußischer Ministerpräsident (Bismarck bis 1890). Einziger verantwortlicher Minister.'
            },
            {
                frage: 'Welche Macht hatte der Bundesrat?',
                antwort: 'Vertretung der Einzelstaaten, Zustimmung bei Gesetzen nötig. Preußen hatte 17 von 58 Stimmen und konnte Verfassungsänderungen blockieren (14 Stimmen genügten). Konservatives Gegengewicht.'
            },
            {
                frage: 'Welche Rolle spielte der Kaiser?',
                antwort: 'Deutscher Kaiser (immer König von Preußen), Ernennung/Entlassung des Kanzlers, Oberbefehl über Heer, Vertretung nach außen, Einberufung/Auflösung Reichstag (mit Bundesrat). Sehr mächtig.'
            },
            {
                frage: 'Welche Befugnisse hatte der Reichstag?',
                antwort: 'Gesetzgebung (mit Bundesrat), Budgetrecht (jährlich), Interpellationsrecht. Aber: Keine Kanzlerwahl, keine Ministerverantwortung, konnte nicht regieren. "Feigenblatt-Parlament".'
            },
            {
                frage: 'Welche Grundrechte gab es?',
                antwort: 'Keine umfassenden Grundrechte in der Reichsverfassung. Einzelne Rechte in Landesverfassungen. Freizügigkeit, Gewerbefreiheit garantiert. Defizit gegenüber Paulskirche.'
            },
            {
                frage: 'Was waren zentrale innenpolitische Konflikte?',
                antwort: 'Kulturkampf gegen katholische Kirche (1870er), Sozialistengesetze gegen SPD (1878-1890), gleichzeitig Sozialgesetzgebung (Kranken-, Unfall-, Rentenversicherung).'
            },
            {
                frage: 'Welche Bedeutung hatte die Sozialgesetzgebung?',
                antwort: 'Erste umfassende Sozialversicherung weltweit (1880er): Kranken-, Unfall-, Invaliditäts- und Altersversicherung. Vorbild für moderne Sozialstaaten, aber auch Instrument gegen SPD ("Zuckerbrot und Peitsche").'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Beschreibe die Zusammensetzung und Funktion des Bundesrats im Kaiserreich.',
                loesung: 'Bundesrat: Vertretung der 25 Bundesstaaten, 58 Stimmen insgesamt. Preußen: 17 Stimmen (Sperrminorität bei Verfassungsänderungen, da 14 Stimmen zum Blockieren genügten). Funktion: Zustimmung zu Gesetzen nötig, Initiativrecht, Verordnungen. Mitglieder: Regierungsvertreter der Länder (nicht gewählt). Konservatives Gegengewicht zum demokratisch gewählten Reichstag.'
            },
            {
                afb: 2,
                frage: 'Erkläre den Widerspruch zwischen allgemeinem Wahlrecht zum Reichstag und Dreiklassenwahlrecht in Preußen und analysiere die politischen Folgen.',
                loesung: 'Reichstag: Allgemeines, gleiches Männerwahlrecht, demokratisch. Preußen (Landtag): Dreiklassenwahlrecht nach Steuern, undemokratisch, begünstigt Konservative und Großgrundbesitzer. Folgen: Reichstag konnte nicht regieren (keine Ministerverantwortung), Preußen dominierte Bundesrat, blockierte Reformen. SPD stark im Reichstag (1912: 34,8%), schwach in Preußen. Demokratisierungsdefizit, Legitimationsproblem. System stabilisierte Obrigkeitsstaat, verhinderte Parlamentarisierung.'
            },
            {
                afb: 3,
                frage: 'Beurteile das Kaiserreich als "Obrigkeitsstaat" unter Berücksichtigung von Verfassungsstruktur und politischer Praxis.',
                loesung: 'Pro Obrigkeitsstaat: Kaiser ernennt Kanzler, keine parlamentarische Regierung, Militär dem Parlament entzogen, Sozialistengesetze, Kulturkampf, Dreiklassenwahlrecht Preußen, Bundesrat blockiert Reformen. Contra: Reichstag mit Budgetrecht, allgemeines Wahlrecht, Sozialgesetzgebung, Rechtsstaatlichkeit, Parteienvielfalt, öffentliche Debatten. Fazit: Konstitutionelle Monarchie mit autoritären Zügen, aber nicht absolutistisch. Demokratisierungsdefizit, aber Ansätze parlamentarischer Kultur. "Halbierte Modernisierung": wirtschaftlich fortschrittlich, politisch rückständig. Obrigkeitsstaat mit demokratischen Elementen.'
            }
        ],
        compare: {
            kontext: 'Reichsgründung 1871 nach Kriegen ("von oben"), Bismarck-Ära, Industrialisierung, Soziale Frage',
            staatsform: 'Konstitutionelle Monarchie, Bundesstaat mit preußischer Hegemonie (17 von 58 Stimmen)',
            wahlrecht: 'Reichstag: Allgemeines, gleiches Männerwahlrecht ab 25; Preußen: Dreiklassenwahlrecht (undemokratisch)',
            gewaltenteilung: 'Kaiser (Ernennung Kanzler, Oberbefehl), Reichskanzler (nicht parlamentarisch verantwortlich), Reichstag (Budgetrecht, keine Regierungsbildung), Bundesrat (Länder, Preußen dominant)',
            grundrechte: 'Keine umfassenden Grundrechte in Reichsverfassung; Freizügigkeit, Gewerbefreiheit; Rückschritt gegenüber Paulskirche',
            besonderheiten: 'Keine parlamentarische Regierung; Kulturkampf, Sozialistengesetze; Sozialgesetzgebung (Vorbild Sozialstaat); preußische Hegemonie',
            organe: 'Kaiser (zugleich König von Preußen), Reichskanzler (einziger verantwortlicher Minister), Reichstag (397 Abg., allg. Wahlrecht), Bundesrat (58 Stimmen, davon Preußen 17), Bundesstaaten (25)'
        }
    },

    weimar1919: {
        titel: 'Weimarer Republik 1919',
        karten: [
            {
                frage: 'Welche Staatsform etablierte die Weimarer Verfassung?',
                antwort: 'Parlamentarisch-demokratische Republik mit starkem Reichspräsidenten. Erste deutsche Demokratie auf Reichsebene.'
            },
            {
                frage: 'Wie war das Wahlrecht geregelt?',
                antwort: 'Allgemeines, gleiches, geheimes, direktes Verhältniswahlrecht ab 20 Jahren für Männer und Frauen. Keine Sperrklausel - führte zu Parteienzersplitterung.'
            },
            {
                frage: 'Welche Macht hatte der Reichspräsident?',
                antwort: 'Direkt vom Volk gewählt (7 Jahre), Oberbefehl über Reichswehr, Ernennung/Entlassung Reichskanzler, Notverordnungen (Art. 48), Reichstagsauflösung (Art. 25). "Ersatzkaiser".'
            },
            {
                frage: 'Was regelte Artikel 48?',
                antwort: 'Notverordnungsrecht des Präsidenten bei Gefahr für öffentliche Sicherheit. Konnte Grundrechte außer Kraft setzen, Verordnungen mit Gesetzeskraft erlassen. Missbraucht in Präsidialkabinetten ab 1930.'
            },
            {
                frage: 'Welche Rolle hatte der Reichstag?',
                antwort: 'Gewählt durch Verhältniswahl, Gesetzgebung, Budgetrecht, Wahl des Reichskanzlers (indirekt durch Vertrauen), Misstrauensvotum. Konnte Kanzler stürzen ohne Nachfolger zu wählen (Schwäche).'
            },
            {
                frage: 'Was war der Reichsrat?',
                antwort: 'Vertretung der Länder (Nachfolger des Bundesrats), Mitwirkung bei Gesetzgebung. Schwächer als Bundesrat im Kaiserreich. Preußen maximal 2/5 der Stimmen (Bremse gegen Hegemonie).'
            },
            {
                frage: 'Welche Grundrechte garantierte die Verfassung?',
                antwort: 'Umfassender Katalog: Meinungs-, Presse-, Versammlungsfreiheit, Gleichheit, Religionsfreiheit. Neu: Soziale Rechte (Arbeit, Wohnung, Bildung), Betriebsräte, Wirtschaftsverfassung (Art. 151-165).'
            },
            {
                frage: 'Was waren die strukturellen Schwächen der Verfassung?',
                antwort: 'Verhältniswahl ohne Sperrklausel (Zersplitterung), starker Präsident (Art. 48/25), keine Ewigkeitsklausel, kein konstruktives Misstrauensvotum, Präsidialkabinette möglich.'
            },
            {
                frage: 'Welche Rolle spielten Präsidialkabinette?',
                antwort: 'Ab 1930: Regierungen ohne Reichstagsmehrheit, gestützt auf Präsident und Art. 48. Brüning, Papen, Schleicher. Aushöhlung der Demokratie, Weg zu Hitler.'
            },
            {
                frage: 'Was war die Wirtschaftsverfassung (Art. 151-165)?',
                antwort: 'Sozialstaatliche Elemente: Recht auf Arbeit, Koalitionsfreiheit, Betriebsräte, Sozialisierungsmöglichkeit, Gemeinwohl vor Eigennutz. Kompromiss zwischen Kapitalismus und Sozialismus. Innovation der Weimarer Verfassung.'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Nenne drei Befugnisse des Reichspräsidenten nach der Weimarer Verfassung.',
                loesung: 'Ernennung und Entlassung des Reichskanzlers (Art. 53), Oberbefehl über Reichswehr (Art. 47), Notverordnungen (Art. 48), Auflösung des Reichstags (Art. 25), Vertretung nach außen, direkte Volkswahl (7 Jahre) (beliebig drei).'
            },
            {
                afb: 2,
                frage: 'Analysiere die Auswirkungen des Verhältniswahlrechts ohne Sperrklausel auf die politische Stabilität der Weimarer Republik.',
                loesung: 'Verhältniswahl: Jede Partei proportional zu Stimmen vertreten. Ohne Sperrklausel: Viele Kleinparteien im Reichstag (zeitweise über 30 Parteien). Folgen: Zersplitterung, schwierige Koalitionsbildung, instabile Regierungen (21 Kabinette in 14 Jahren), häufige Neuwahlen. Begünstigt Extremisten (NSDAP, KPD ab 1930). Erschwert Kompromisse und handlungsfähige Mehrheiten. Beitrag zur Instabilität der Republik. Aber: Auch Ausdruck gesellschaftlicher Polarisierung, nicht nur Ursache.'
            },
            {
                afb: 3,
                frage: 'Erörtere, inwieweit die Weimarer Verfassung selbst zum Scheitern der Republik beitrug oder ob außerverfassungsrechtliche Faktoren entscheidender waren.',
                loesung: 'Verfassungsschwächen: Art. 48 (Missbrauch für Präsidialkabinette), Art. 25 (Reichstagsauflösung), Verhältniswahl ohne Sperrklausel (Zersplitterung), starker Präsident, kein konstruktives Misstrauensvotum. Ermöglichten Aushöhlung der Demokratie 1930-33. Außerverfassungsrechtlich: Versailler Vertrag (Belastung), Wirtschaftskrisen (1923, 1929-33), fehlende demokratische Tradition, antidemokratische Eliten (Militär, Justiz, Verwaltung), politische Gewalt, Extremismus (NSDAP, KPD). Fazit: Verfassung hatte Schwächen, aber nicht determinierend. Politische Kultur, Krisen und bewusste Zerstörung durch Gegner entscheidender. Verfassung funktionsfähig bei demokratischem Willen. Aber: Schwächen erleichterten Machtübergabe an Hitler.'
            }
        ],
        compare: {
            kontext: 'Nach WW1, Novemberrevolution 1918, Versailler Vertrag, Wirtschaftskrisen (1923, 1929-33), Aufstieg Extremismus',
            staatsform: 'Parlamentarisch-demokratische Republik mit starkem, direkt gewähltem Präsidenten',
            wahlrecht: 'Allgemeines Verhältniswahlrecht ab 20 (Männer und Frauen), keine Sperrklausel (Parteienzersplitterung)',
            gewaltenteilung: 'Reichstag (Verhältniswahl), Reichsrat (Länder, schwächer als Bundesrat), Reichspräsident (direkt gewählt, 7 Jahre), Reichskanzler (vom Präsidenten ernannt, braucht Vertrauen des Reichstags); Art. 48/25 problematisch',
            grundrechte: 'Umfassend: klassische Freiheitsrechte + soziale Rechte (Arbeit, Wohnung, Bildung); Wirtschaftsverfassung (Art. 151-165); Betriebsräte',
            besonderheiten: 'Frauenwahlrecht (erstmals); Präsidialkabinette ab 1930 (Brüning, Papen, Schleicher); Scheitern 1933 (Machtübergabe Hitler); Vorbild für GG (mit Korrekturen)',
            organe: 'Reichstag (ca. 500-600 Abg., Verhältniswahl), Reichsrat (Ländervertretung, max. 2/5 für Preußen), Reichspräsident (direkt gewählt, 7 Jahre), Reichskanzler (vom Präsidenten ernannt), Reichsregierung, Staatsgerichtshof'
        }
    },

    grundgesetz1949: {
        titel: 'Grundgesetz 1949',
        karten: [
            {
                frage: 'Welche Staatsform etabliert das Grundgesetz?',
                antwort: 'Parlamentarisch-demokratische Bundesrepublik mit Kanzlerdemokratie. Föderales System mit 16 Bundesländern (ursprünglich 11).'
            },
            {
                frage: 'Wie ist das Wahlrecht geregelt?',
                antwort: 'Allgemeines, gleiches, geheimes, direktes Wahlrecht ab 18 Jahren (seit 1970, vorher 21). Personalisiertes Verhältniswahlrecht mit 5%-Sperrklausel (seit 1953).'
            },
            {
                frage: 'Was ist das konstruktive Misstrauensvotum (Art. 67)?',
                antwort: 'Bundestag kann Kanzler nur stürzen, wenn gleichzeitig Nachfolger mit absoluter Mehrheit gewählt wird. Verhindert Instabilität wie in Weimar. Nur 2x erfolgreich angewendet (1982: Schmidt → Kohl).'
            },
            {
                frage: 'Welche Rolle hat der Bundespräsident?',
                antwort: 'Repräsentative Funktion, von Bundesversammlung gewählt (5 Jahre). Schwächer als Weimarer Präsident: Keine Notverordnungen, kein Oberbefehl, keine freie Kanzlerernennung. Prüft Gesetze formal.'
            },
            {
                frage: 'Was ist die Ewigkeitsgarantie (Art. 79 III)?',
                antwort: 'Bundesstaatsprinzip, Demokratie, Rechtsstaatlichkeit, Sozialstaatsprinzip, Menschenwürde (Art. 1) sind unabänderlich. Schutz vor Verfassungsänderung wie 1933 (Ermächtigungsgesetz).'
            },
            {
                frage: 'Was bedeutet "wehrhafte Demokratie"?',
                antwort: 'Demokratie schützt sich aktiv gegen Feinde: Parteiverbot (Art. 21 II), Grundrechtsverwirkung (Art. 18), Widerstandsrecht (Art. 20 IV). Lehre aus Weimar und NS-Zeit.'
            },
            {
                frage: 'Welche Rolle spielt das Bundesverfassungsgericht?',
                antwort: 'Höchstes Gericht, Hüter der Verfassung. Normenkontrolle, Verfassungsbeschwerden, Organstreitigkeiten, Parteiverbote. Sehr mächtig, kann Gesetze für nichtig erklären.'
            },
            {
                frage: 'Welche Rolle hat der Bundeskanzler?',
                antwort: 'Vom Bundestag gewählt (nicht vom Präsidenten ernannt), bestimmt Richtlinien der Politik (Richtlinienkompetenz), wählt Minister aus. Starke Stellung ("Kanzlerdemokratie"). Nur durch konstruktives Misstrauensvotum absetzbar.'
            },
            {
                frage: 'Was ist der Bundesrat?',
                antwort: 'Vertretung der 16 Bundesländer, Mitglieder von Landesregierungen entsandt (nicht gewählt). Mitwirkung an Gesetzgebung (Zustimmung bei Länderbelangen nötig). Föderales Gegengewicht zum Bundestag.'
            },
            {
                frage: 'Welche Lehren aus Weimar wurden gezogen?',
                antwort: 'Konstruktives Misstrauensvotum, schwacher Präsident, 5%-Klausel, Ewigkeitsgarantie, wehrhafte Demokratie, BVerfG, Kanzlerdemokratie, keine Notverordnungen. Stabilität vor Flexibilität.'
            }
        ],
        test: [
            {
                afb: 1,
                frage: 'Beschreibe die Funktion des Bundesrats im politischen System der Bundesrepublik.',
                loesung: 'Bundesrat: Vertretung der 16 Bundesländer (ursprünglich 11), Mitglieder von Landesregierungen entsandt (nicht direkt gewählt). Stimmenverteilung nach Einwohnerzahl (3-6 Stimmen pro Land). Funktion: Mitwirkung an Gesetzgebung (Zustimmung bei Länderbelangen wie Steuern, Verwaltung nötig), Einspruch bei anderen Gesetzen (überwindbar), Initiativrecht. Föderales Gegengewicht zum Bundestag. Keine Volkswahl, sondern Exekutivföderalismus.'
            },
            {
                afb: 2,
                frage: 'Erkläre, wie das Grundgesetz durch das konstruktive Misstrauensvotum und die 5%-Klausel die Schwächen der Weimarer Verfassung korrigiert.',
                loesung: 'Weimar: Reichstag konnte Kanzler stürzen ohne Nachfolger (Instabilität, 21 Regierungen in 14 Jahren), keine Sperrklausel (Zersplitterung, über 30 Parteien). GG: Konstruktives Misstrauensvotum (Art. 67): Kanzler nur mit gleichzeitiger Nachfolgerwahl absetzbar, verhindert Chaos und handlungsunfähige Übergangszeiten. 5%-Klausel: Kleine Parteien ausgeschlossen, weniger Zersplitterung, stabile Koalitionen möglich. Ergebnis: Deutlich mehr Stabilität (nur 9 Kanzler seit 1949), funktionsfähige Regierungen, Schutz vor Extremismus. Aber: Auch Kritik an 5%-Klausel (undemokratisch).'
            },
            {
                afb: 3,
                frage: 'Beurteile das Konzept der "wehrhaften Demokratie" im Grundgesetz: Ist es ein notwendiger Schutz oder ein Risiko für demokratische Freiheiten?',
                loesung: 'Pro: Lehre aus Weimar (NSDAP legal an Macht, Ermächtigungsgesetz). Parteiverbot (Art. 21 II) gegen verfassungsfeindliche Parteien, Grundrechtsverwirkung (Art. 18) bei Missbrauch, Widerstandsrecht (Art. 20 IV) gegen Verfassungsbruch. Schützt Demokratie vor Feinden, die Freiheit nutzen, um sie abzuschaffen. Notwendig gegen Extremismus. Contra: Risiko Missbrauch, Einschränkung Meinungsfreiheit, wer definiert "Feinde"? Parteiverbote selten und umstritten (KPD 1956, SRP 1952, NPD-Verfahren gescheitert). Gefahr autoritärer Tendenzen. Fazit: In Maßen legitim als Lehre aus Geschichte, aber strikte Kontrolle durch BVerfG nötig. Balance zwischen Schutz und Freiheit. Bisher funktioniert, aber Wachsamkeit geboten. Demokratie muss sich wehren können, aber nicht präventiv Freiheiten einschränken.'
            }
        ],
        compare: {
            kontext: 'Nach WW2, Teilung Deutschlands, Kalter Krieg, Wirtschaftswunder, Wiedervereinigung 1990, EU-Integration',
            staatsform: 'Parlamentarisch-demokratische Bundesrepublik, Kanzlerdemokratie, föderales System',
            wahlrecht: 'Allgemeines Wahlrecht ab 18 (seit 1970), personalisiertes Verhältniswahlrecht, 5%-Sperrklausel (seit 1953)',
            gewaltenteilung: 'Bundestag (direkt gewählt), Bundesrat (Länder), Bundeskanzler (vom Bundestag gewählt, Richtlinienkompetenz), schwacher Bundespräsident (Bundesversammlung), BVerfG (Verfassungsgericht); konstruktives Misstrauensvotum (Art. 67)',
            grundrechte: 'Menschenwürde unantastbar (Art. 1, Ewigkeitsgarantie); umfassende Freiheits- und Gleichheitsrechte (Art. 1-19); direkt einklagbar vor BVerfG; Grundrechte binden alle Staatsgewalt',
            besonderheiten: 'Ewigkeitsgarantie (Art. 79 III), wehrhafte Demokratie (Art. 21 II, 18, 20 IV), BVerfG als Hüter der Verfassung, Lehren aus Weimar, föderaler Staatsaufbau, europäische Integration (Art. 23)',
            organe: 'Bundestag (mind. 598 Abg., personalisiertes Verhältniswahlrecht), Bundesrat (69 Stimmen, Länderregierungen), Bundeskanzler (vom Bundestag gewählt), Bundespräsident (Bundesversammlung, 5 Jahre), Bundesverfassungsgericht (2 Senate, je 8 Richter), Bundesregierung'
        }
    }
};


