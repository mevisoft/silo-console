// Copyright (c) 2026 Pigsty
// SPDX-License-Identifier: AGPL-3.0-or-later
// AI-assisted translation; see ../../README.md for review and maintenance.

import type { Dictionary } from "../../catalog";

const messages: Dictionary = {
  "### Users\n\nA S3 LuisML user consists of a unique access key (username) and corresponding secret key (password). Clients must authenticate their identity by specifying both a valid access key (username) and the corresponding secret key (password) of an existing S3 LuisML user.\n\nGroups provide a simplified method for managing shared permissions among users with common access patterns and workloads.\n\nUsers inherit access permissions to data and resources through the groups they belong to.\n\nSILO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.\n\nEach user can access only those resources and operations which are explicitly granted by the built-in role. S3 LuisML denies access to any other resource or action by default.":
    "### Benutzer\n\nEin S3 LuisML-Benutzer besteht aus einem eindeutigen Zugangsschlüssel (Benutzername) und einem entsprechenden geheimen Schlüssel (Passwort). Clients müssen ihre Identität authentifizieren, indem sie sowohl einen gültigen Zugriffsschlüssel (Benutzername) als auch den entsprechenden geheimen Schlüssel (Passwort) eines vorhandenen S3 LuisML-Benutzers angeben.\n\nGruppen bieten eine vereinfachte Methode zum Verwalten gemeinsamer Berechtigungen zwischen Benutzern mit gemeinsamen Zugriffsmustern und Arbeitslasten.\n\nBenutzer erben Zugriffsberechtigungen für Daten und Ressourcen über die Gruppen, denen sie angehören.\n\nSILO verwendet richtlinienbasierte Zugriffskontrolle (PBAC), um die autorisierten Aktionen und Ressourcen zu definieren, auf die ein authentifizierter Benutzer Zugriff hat. Jede Richtlinie beschreibt eine oder mehrere Aktionen und Bedingungen, die die Berechtigungen eines Benutzers oder einer Benutzergruppe beschreiben.\n\nJeder Benutzer kann nur auf die Ressourcen und Vorgänge zugreifen, die durch die integrierte Rolle explizit gewährt werden. S3 LuisML verweigert standardmäßig den Zugriff auf alle anderen Ressourcen oder Aktionen.",
  "### IAM policies\n\nSILO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.\n\nSILO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The S3 LuisML documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.":
    "### IAM-Richtlinien\n\nSILO verwendet richtlinienbasierte Zugriffskontrolle (PBAC), um die autorisierten Aktionen und Ressourcen zu definieren, auf die ein authentifizierter Benutzer Zugriff hat. Jede Richtlinie beschreibt eine oder mehrere Aktionen und Bedingungen, die die Berechtigungen eines Benutzers oder einer Benutzergruppe beschreiben.\n\nSILO PBAC ist auf Kompatibilität mit der AWS-IAM-Richtliniensyntax, -struktur und dem -verhalten ausgelegt. Die S3 LuisML-Dokumentation bemüht sich nach besten Kräften, IAM-spezifisches Verhalten und Funktionalität abzudecken. Ziehen Sie in Betracht, für weiterführende Details zu AWS-IAM-spezifischen Themen die AWS-IAM-Dokumentation heranzuziehen.",
  "### Access keys\n\nSILO access keys are child identities of an authenticated S3 LuisML user, including externally managed identities. Each access key inherits its privileges based on the policies attached to it’s parent user or those groups in which the parent user has membership. Access Keys also support an optional inline policy which further restricts access to a subset of actions and resources available to the parent user.":
    "### Zugriffsschlüssel\n\nSILO-Zugriffsschlüssel sind untergeordnete Identitäten eines authentifizierten S3 LuisML-Benutzers, einschließlich extern verwalteter Identitäten. Jeder Zugriffsschlüssel erbt seine Berechtigungen basierend auf den Richtlinien, die seinem übergeordneten Benutzer oder den Gruppen, in denen der übergeordnete Benutzer Mitglied ist, zugeordnet sind. Zugriffsschlüssel unterstützen auch eine optionale Inline-Richtlinie, die den Zugriff auf eine Teilmenge der Aktionen und Ressourcen, die dem übergeordneten Benutzer zur Verfügung stehen, weiter einschränkt.",
  "### Event destinations\n\nSILO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. S3 LuisML supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.":
    "### Ereignisziele\n\nSILO-Bucket-Benachrichtigungen ermöglichen Administratoren das Senden von Benachrichtigungen an unterstützte externe Dienste bei bestimmten Objekt- oder Bucket-Ereignissen. S3 LuisML unterstützt S3-Ereignisse auf Bucket- und Objektebene ähnlich den Amazon-S3-Ereignisbenachrichtigungen.",
  "### Inspect examples\n\nDownload object metadata or constituent parts from the drives as a ZIP archive. Enable **Encrypt** to protect the downloaded archive; save the decryption key when it is shown.\n\n- **Object metadata:** Volume/Bucket `test-bucket`, Path `test*/xl.meta`.\n- **Object parts:** Volume/Bucket `test-bucket`, Path `test*/*/part.*`.\n- **Recursive prefix:** Volume/Bucket `test-bucket`, Path `test/**`.\n\n**Caution:** Recursive inspection can be expensive. Limit the bucket and path before starting; use recursive patterns only when necessary.":
    "### Beispiele für „Untersuchen“\n\nLaden Sie Objektmetadaten oder Bestandteile von den Laufwerken als ZIP-Archiv herunter. Aktivieren Sie **Verschlüsseln**, um das heruntergeladene Archiv zu schützen; speichern Sie den Entschlüsselungsschlüssel, sobald er angezeigt wird.\n\n- **Objektmetadaten:** Volume/Bucket `test-bucket`, Pfad `test*/xl.meta`.\n- **Objektteile:** Volume/Bucket `test-bucket`, Pfad `test*/*/part.*`.\n- **Rekursives Präfix:** Volume/Bucket `test-bucket`, Pfad `test/**`.\n\n**Achtung:** Eine rekursive Prüfung kann ressourcenintensiv sein. Begrenzen Sie vorab Bucket und Pfad und verwenden Sie rekursive Muster nur bei Bedarf.",
  Troubleshooting: "Fehlerbehebung",
  "Need more help?  Check out additional Troubleshooting options":
    "Benötigen Sie weitere Hilfe?  Sehen Sie sich weitere Optionen zur Fehlerbehebung an",
  "Identity and Access Management": "Identitäts- und Zugriffsmanagement",
  "S3 LuisML uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access.":
    "S3 LuisML verwendet richtlinienbasierte Zugriffskontrolle (PBAC), um die autorisierten Aktionen und Ressourcen zu definieren, auf die ein authentifizierter Benutzer Zugriff hat.",
  "Policy based access control": "Richtlinienbasierte Zugriffskontrolle",
  "Learn how Policy-Based Access Control (PBAC)  is used to define the authorized actions and resources  to which an authenticated user has access":
    "Erfahren Sie, wie die richtlinienbasierte Zugriffskontrolle (PBAC) verwendet wird, um die autorisierten Aktionen und Ressourcen zu definieren, auf die ein authentifizierter Benutzer Zugriff hat",
  "OpenID Connect Access Management": "OpenID Connect Access Management",
  "Learn more about connecting S3 LuisML to OpenID for access management.":
    "Erfahren Sie mehr über die Verbindung von S3 LuisML mit OpenID für die Zugriffsverwaltung.",
  "MinIO Identity and Access Management: Part 1 - Overview And Modification of Built In Policies":
    "MinIO Identitäts- und Zugriffsmanagement: Teil 1 – Übersicht und Änderung integrierter Richtlinien",
  "This video introduces MinIO IAM policies, including an overview of the built-in policies, and how to create and remove a policy.":
    "Dieses Video stellt MinIO IAM Richtlinien vor, einschließlich einer Übersicht über die integrierten Richtlinien und wie man eine Richtlinie erstellt und entfernt.",
  "MinIO Identity and Access Management: Part 4 - Lab - Setting Up Users, Groups, and Policies":
    "MinIO Identitäts- und Zugriffsverwaltung: Teil 4 – Praxisübung – Einrichten von Benutzern, Gruppen und Richtlinien",
  "This Lab video demonstrates setting up identity and access management based Users, Groups and Policies. ":
    "Dieses Lab-Video demonstriert die Einrichtung von Benutzern, Gruppen und Richtlinien auf Basis der Identitäts- und Zugriffsverwaltung.",
  "MinIO Identity and Access Management: Part 5 - Lab - Creating A Custom Policy":
    "MinIO Identitäts- und Zugriffsverwaltung: Teil 5 – Praxisübung – Erstellen einer benutzerdefinierten Richtlinie",
  "This Lab video demonstrates creating custom IAM policies.":
    "Dieses Lab-Video zeigt die Erstellung benutzerdefinierter IAM-Richtlinien.",
  "MinIO Identity and Access Management: Part 6 - Lab - Interfacing With OpenID and LDAP":
    "MinIO Identitäts- und Zugriffsverwaltung: Teil 6 – Praxisübung – Anbindung von OpenID und LDAP",
  "This Lab video demonstrates interfacing with OpenID and LDAP. ":
    "Dieses Praxisvideo zeigt die Anbindung von OpenID und LDAP.",
  "# Bucket \n A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.":
    "# Bucket \n Ein Bucket ähnelt einem Ordner oder Verzeichnis in einem Dateisystem, wobei jeder Bucket eine beliebige Anzahl von Objekten enthalten kann.",
  "Bucket Versioning": "Bucket-Versionierung",
  "S3 LuisML supports keeping multiple “versions” of an object in a single bucket. S3 LuisML versioning protects from unintended overwrites and deletions while providing support for “undoing” a write operation.":
    "S3 LuisML unterstützt das Speichern mehrerer „Versionen“ eines Objekts in einem einzigen Bucket. Die S3 LuisML-Versionierung schützt vor unbeabsichtigtem Überschreiben und Löschen und ermöglicht das „Rückgängigmachen“ eines Schreibvorgangs.",
  Buckets: "Buckets",
  "Learn about using Console to create and manage Buckets with S3 LuisML":
    "Erfahren Sie mehr über die Verwendung der Konsole zum Erstellen und Verwalten von Buckets mit S3 LuisML",
  "Creating Buckets and Users through the MinIO Console":
    "Erstellen von Buckets und Benutzern über die MinIO-Konsole",
  "Learn how to manage your storage buckets and objects with a hands-on introduction to the MinIO Console and SDKs.":
    "Erfahren Sie anhand einer praktischen Einführung in die MinIO-Konsole und die SDKs, wie Sie Ihre Buckets und Objekte verwalten.",
  "Console Introduction - Add a Bucket and a User":
    "Konsoleneinführung – Bucket und Benutzer hinzufügen",
  "This session shows how to create AWS S3 buckets and users with MinIO Console.":
    "Diese Sitzung zeigt, wie man AWS S3 Buckets und Benutzer mit der MinIO Konsole erstellt.",
  "Object Locking and Retention": "Objektsperrung und -aufbewahrung",
  "In this video we talk about object retention, WORM (Write Once Read Many), as well as duration based and legal holds.":
    "In diesem Video sprechen wir über Objektaufbewahrung, WORM (Write Once Read Many) sowie dauerbasierte und rechtliche Aufbewahrungsfristen.",
  "Object Locking and Retention Lab":
    "Praxisübung: Objektsperre und -aufbewahrung",
  "This lab demonstrates creation and removal of both bucket and object specific retention, compliance, and legal holds. ":
    "In dieser Praxisübung wird das Erstellen und Entfernen von Aufbewahrungs-, Compliance- und Legal-Hold-Regeln auf Bucket- und Objektebene demonstriert.",
  "Versioning and Lifecycle Management":
    "Versionierung und Lebenszyklusmanagement",
  "In this video, we will focus on versioning and lifecycle management.":
    "In diesem Video konzentrieren wir uns auf Versionierung und Lebenszyklusmanagement.",
  Versioning: "Versionierung",
  "Learn how Versioning gives access to the full history of an object from its creation through each update.":
    "Erfahren Sie, wie Versioning den Zugriff auf den gesamten Verlauf eines Objekts von seiner Erstellung bis zu jedem Update ermöglicht.",
  "Learn how versioning protects your data from unintended overwrites and deletions":
    "Erfahren Sie, wie die Versionierung Ihre Daten vor unbeabsichtigtem Überschreiben und Löschen schützt",
  "Learn how to create and manage Buckets":
    "Erfahren Sie, wie Sie Buckets erstellen und verwalten",
  "In this video, we will focus on versioning  and lifecycle management.":
    "In diesem Video konzentrieren wir uns auf Versionierung und Lebenszyklusmanagement.",
  "Policy Document Structure": "Struktur des Richtliniendokuments",
  "S3 LuisML policy documents use the same schema as AWS IAM Policy documents. See policy templates and allowed S3 Policy actions and condition keys in our docs.":
    "S3 LuisML-Richtliniendokumente verwenden dasselbe Schema wie AWS-IAM-Richtliniendokumente. Richtlinienvorlagen sowie zulässige S3-Richtlinienaktionen und Bedingungsschlüssel finden Sie in unserer Dokumentation.",
  "Access Keys": "Zugriffsschlüssel",
  "Access Keys support providing applications authentication credentials which inherit permissions from the “parent” user.":
    "Zugriffsschlüssel unterstützen die Bereitstellung von Anmeldeinformationen für die Anwendungsauthentifizierung, die Berechtigungen vom „übergeordneten“ Benutzer erben.",
  "Policy Variables": "Richtlinienvariablen",
  "S3 LuisML supports using policy variables for automatically substituting context from the authenticated user and/or the operation into the user’s assigned policy or policies.":
    "S3 LuisML unterstützt die Verwendung von Richtlinienvariablen zum automatischen Ersetzen des Kontexts des authentifizierten Benutzers und/oder des Vorgangs in der oder den zugewiesenen Richtlinien des Benutzers.",
  "Admin Policy Action Keys": "Aktionsschlüssel für Admin-Richtlinien",
  "See actions supported in defining policies for S3 LuisML admin operations. These actions are only valid for S3 LuisML deployments and are not intended for use with other S3-compatible services.":
    "Sehen Sie sich die Aktionen an, die beim Definieren von Richtlinien für S3 LuisML-Admin-Vorgänge unterstützt werden. Diese Aktionen gelten nur für S3 LuisML-Bereitstellungen und sind nicht für die Verwendung mit anderen S3-kompatiblen Diensten vorgesehen.",
  "Admin Policy Condition Keys": "Bedingungsschlüssel für Admin-Richtlinien",
  "See which conditions S3 LuisML supports for use with defining policies for admin actions.":
    "Sehen Sie, welche Bedingungen S3 LuisML für die Verwendung beim Definieren von Richtlinien für Administratoraktionen unterstützt.",
  "Supported S3 Policy Condition Keys":
    "Unterstützte S3-Richtlinien-Bedingungsschlüssel",
  "S3 LuisML policy documents support IAM conditional statements.":
    "S3 LuisML-Richtliniendokumente unterstützen bedingte IAM-Anweisungen.",
  "Supported S3 Policy Actions": "Unterstützte S3-Richtlinienaktionen",
  "S3 LuisML policy documents support a subset of IAM S3 Action keys.":
    "S3 LuisML-Richtliniendokumente unterstützen eine Teilmenge von IAM-S3-Aktionsschlüsseln.",
  "MinIO Identity and Access Management: Part 2 - Using IDP to Manage Users And Groups":
    "MinIO Identitäts- und Zugriffsverwaltung: Teil 2 – Verwenden von IDP zur Verwaltung von Benutzern und Gruppen",
  "This video discusses Users and Groups, and how policies can be applied to them to enable specific permissions.":
    "In diesem Video geht es um Benutzer und Gruppen und wie Richtlinien auf sie angewendet werden können, um bestimmte Berechtigungen zu ermöglichen.",
  "S3 LuisML versioning protects from unintended overwrites and deletions while providing support for “undoing” a write operation.":
    "Die S3 LuisML-Versionierung schützt vor unbeabsichtigtem Überschreiben und Löschen und ermöglicht das „Rückgängigmachen“ eines Schreibvorgangs.",
  "Lifecycle Management II - Versioning and Lifecycle Management":
    "Lebenszyklusmanagement II – Versionierung und Lebenszyklusmanagement",
  "Creating a New Bucket in a Specific Region":
    "Erstellen eines neuen Buckets in einer bestimmten Region",
  "A Bucket can be created in a specified region":
    "Ein Bucket kann in einer bestimmten Region erstellt werden",
  "What are Settings and Configurations?":
    "Was sind Einstellungen und Konfigurationen?",
  "These configuration settings define runtime  behavior of the S3 LuisML server process,  comparable to the mc admin config command":
    "Diese Konfigurationseinstellungen definieren das Laufzeitverhalten des S3 LuisML-Serverprozesses, vergleichbar mit dem Befehl mc admin config.",
  "MinIO Feature Overview: Active-Active Replication":
    "MinIO Funktionsübersicht: Aktiv-Aktiv-Replikation",
  "Learn about MinIO's object replication capabilities and how MinIO provides resilience to common storage disruption scenarios.":
    "Erfahren Sie mehr über die Objektreplikationsfunktionen von MinIO und wie MinIO Widerstandsfähigkeit gegenüber häufigen Speicherunterbrechungsszenarien bietet.",
  "How is failed replication handled?":
    "Wie wird mit einer fehlgeschlagenen Replikation umgegangen?",
  "S3 LuisML queues failed replication operations and retries those operations until replication succeeds.":
    "S3 LuisML stellt fehlgeschlagene Replikationsvorgänge in die Warteschlange und wiederholt diese Vorgänge, bis die Replikation erfolgreich ist.",
  "What are Replication Workers?": "Was sind Replikations-Worker?",
  "S3 LuisML uses a replication queuing system with multiple concurrent replication workers operating on that queue.":
    "S3 LuisML verwendet ein Replikations-Warteschlangensystem mit mehreren gleichzeitigen Replikations-Workern, die diese Warteschlange abarbeiten.",
  "These configuration settings define runtime behavior of the S3 LuisML server process,  comparable to the mc admin config command":
    "Diese Konfigurationseinstellungen definieren das Laufzeitverhalten des S3 LuisML-Serverprozesses, vergleichbar mit dem Befehl mc admin config.",
  "Where can I see current Heal status?":
    "Wo sehe ich den aktuellen Reparaturstatus (Heal)?",
  "Check under Monitoring/Drives on the left hand  menu to see Drive and Bucket Healing status":
    "Überprüfen Sie unter „Überwachung/Laufwerke“ im linken Menü den Status der Laufwerks- und Bucket-Reparatur.",
  "How is Erasure Coding used to Protect Data?":
    "Wie wird Erasure Coding zum Schutz von Daten verwendet?",
  "S3 LuisML erasure coding is a data redundancy and  availability feature that allows S3 LuisML deployments to  automatically reconstruct objects on-the-fly despite  the loss of multiple drives or nodes in the cluster.":
    "S3 LuisML Erasure Coding ist eine Datenredundanz- und Verfügbarkeitsfunktion, mit der S3 LuisML-Bereitstellungen Objekte im laufenden Betrieb automatisch rekonstruieren können, selbst wenn mehrere Laufwerke oder Knoten im Cluster ausfallen.",
  "Recover After Hardware failure": "Wiederherstellung nach Hardwarefehler",
  "Depending on the deployment topology and  selected erasure code parity, S3 LuisML can tolerate loss  of up to half the drives or nodes in the deployment  while maintaining read access to objects.":
    "Abhängig von der Bereitstellungstopologie und der gewählten Erasure-Coding-Parität kann S3 LuisML den Ausfall von bis zur Hälfte der Laufwerke oder Knoten verkraften und gleichzeitig den Lesezugriff auf Objekte aufrechterhalten.",
  "Site Failure Recovery": "Wiederherstellung nach Standortausfall",
  "S3 LuisML can make the loss of an entire site, while  significant, a relatively minor incident. Site recovery depends on the replication option you use for the site.":
    "Mit S3 LuisML bleibt selbst der Ausfall eines gesamten Standorts beherrschbar. Die Standortwiederherstellung hängt von der für den Standort verwendeten Replikationsoption ab.",
  "Node Failure Recovery": "Wiederherstellung nach Knotenausfall",
  "If a S3 LuisML node suffers complete hardware failure, the node begins healing operations once it rejoins the  deployment.":
    "Wenn ein S3 LuisML-Knoten einen vollständigen Hardwarefehler erleidet, beginnt der Knoten mit Wiederherstellungsvorgängen, sobald er der Bereitstellung wieder beitritt.",
  "What is S3 LuisML Healing?":
    "Was ist die S3 LuisML-Selbstreparatur (Healing)?",
  "Healing is S3 LuisML’s ability to restore data after some event causes data loss. Data loss can come from bit rot, drive loss, or node loss.":
    "Selbstreparatur (Healing) ist die Fähigkeit von S3 LuisML, Daten nach einem Datenverlust wiederherzustellen, etwa nach Bitfäule (Bit Rot) oder dem Ausfall von Laufwerken oder Knoten.",
  "Understand S3 LuisML Healing Using mc":
    "S3 LuisML-Selbstreparatur (Healing) mit mc verstehen",
  "The mc admin heal command scans for objects that are damaged or corrupted and heals those objects.":
    "Der Befehl mc admin heal sucht nach beschädigten oder korrumpierten Objekten und repariert sie.",
  "What is Bit Rot?": "Was ist Bit Rot?",
  "Bit rot is data corruption that occurs without the user’s knowledge. S3 LuisML combats bit rot with hashing and erasure coding.":
    "Bitfäule ist eine Datenbeschädigung, die ohne Wissen des Benutzers auftritt. S3 LuisML bekämpft Bitfäule mit Hashing und Erasure Coding.",
  "These configuration settings define runtime behavior of the S3 LuisML server process, comparable to the mc admin config command":
    "Diese Konfigurationseinstellungen definieren das Laufzeitverhalten des S3 LuisML-Serverprozesses, vergleichbar mit dem Befehl mc admin config.",
  "Overview of MinIO Erasure Coding": "Übersicht über MinIO Erasure Coding",
  "Through this MinIO video you will learn about MinIO erasure coding, including erasure sets, erasure parity, and stripe size. You will also learn about how the Reed-Solomon algorithm can be optimized for storage efficiency (yielding cost savings) or data lost protection (number of servers and drives that can fail). The video also walks through the MinIO Erasure Code calculator, considerations for cluster design and the command line syntax needed to establish an erasure code deployment. ":
    "In diesem MinIO-Video erfahren Sie mehr über MinIO-Erasure-Codierung, einschließlich Erasure-Sets, Erasure-Parität und Stripe-Größe. Sie erfahren außerdem, wie der Reed-Solomon-Algorithmus hinsichtlich der Speichereffizienz (was zu Kosteneinsparungen führt) oder des Schutzes vor Datenverlust (Anzahl der Server und Laufwerke, die ausfallen können) optimiert werden kann. Das Video führt außerdem durch den MinIO Erasure-Code-Rechner, Überlegungen zum Cluster-Design und die Befehlszeilensyntax, die zum Einrichten einer Erasure-Code-Bereitstellung erforderlich ist.",
  "Object Scanner": "Objektscanner",
  "Learn more about how the scanner checks Objects for transition and expiry based on lifecycle rules":
    "Erfahren Sie mehr darüber, wie der Scanner Objekte anhand von Lebenszyklusregeln auf Übergang und Ablauf überprüft",
  "What is the Scanner?": "Was ist der Scanner?",
  "One of several low-priority processes S3 LuisML runs to check lifecycle management rules, bucket or site replication status, as well as object bit rot and healing":
    "Einer von mehreren Hintergrundprozessen mit niedriger Priorität, die S3 LuisML ausführt, um Lebenszyklusregeln, den Bucket- oder Standort-Replikationsstatus sowie Bitfäule und Objektreparatur zu prüfen.",
  "Lifecycle Management Object Scanner Considerations":
    "Überlegungen zum Lifecycle Management Object Scanner",
  "S3 LuisML uses a scanner process to check objects against all configured lifecycle management rules. High IO workloads or limited system resources may delay application of lifecycle management rules":
    "S3 LuisML verwendet einen Scannerprozess, um Objekte anhand aller konfigurierten Lebenszyklusregeln zu prüfen. Hohe I/O-Lasten oder begrenzte Systemressourcen können die Anwendung von Lebenszyklusregeln verzögern.",
  "Lifecycle Management Lab": "Lifecycle Management Lab",
  "Use the MinIO client to demonstrate expiration rules, the scanner, and transitioning objects to remote tiers.":
    "Verwenden Sie den MinIO-Client, um Ablaufregeln, den Scanner und den Übergang von Objekten zu Remote-Ebenen zu demonstrieren.",
  "What is etcd?": "Was ist etcd?",
  "etcd is a strongly consistent, distributed key-value  store that provides a reliable way to store data that  needs to be accessed by a distributed system or  cluster of machines.":
    "etcd ist ein stark konsistenter, verteilter Schlüsselwertspeicher, der eine zuverlässige Möglichkeit zum Speichern von Daten bietet, auf die ein verteiltes System oder ein Cluster von Maschinen zugreifen muss.",
  "What is the logger_webhook Environment Variable?":
    "Was ist die Umgebungsvariable logger_webhook?",
  "The top-level configuration key for defining an  HTTP webhook target for publishing S3 LuisML logs.":
    "Der Konfigurationsschlüssel der obersten Ebene zum Definieren eines HTTP-Webhook-Ziels für die Veröffentlichung von S3 LuisML-Protokollen.",
  "Publish Server Logs to HTTP Webhook":
    "Serverprotokolle an HTTP-Webhook senden",
  "You can configure a new HTTP webhook endpoint  to which S3 LuisML publishes S3 LuisML server logs using  either environment variables or by setting  runtime configuration settings.":
    "Sie können einen neuen HTTP-Webhook-Endpunkt konfigurieren, an den S3 LuisML Serverprotokolle sendet – entweder über Umgebungsvariablen oder über Laufzeiteinstellungen.",
  "Monitoring Logs": "Überwachungsprotokolle",
  "S3 LuisML supports publishing server logs  and audit logs to an HTTP webhook.":
    "S3 LuisML unterstützt die Veröffentlichung von Serverprotokollen und Audit-Protokollen in einem HTTP-Webhook.",
  "Monitoring with Prometheus": "Überwachung mit Prometheus",
  "Learn about the monitoring features available  in your MinIO Console and how to export to  Prometheus and get information back so you can  view it in detail.":
    "Erfahren Sie mehr über die Überwachungsfunktionen, die in Ihrer MinIO-Konsole verfügbar sind, und wie Sie nach Prometheus exportieren und Informationen zurückerhalten, damit Sie sie im Detail anzeigen können.",
  "Prometheus Monitoring Lab": "Praxisübung: Überwachung mit Prometheus",
  "Learn how to set up Prometheus and connect it  back to your MinIO cluster so that you can get  detailed history of what's going on in your MinIO  cluster at any given time.":
    "Erfahren Sie, wie Sie Prometheus einrichten und wieder mit Ihrem MinIO-Cluster verbinden, damit Sie jederzeit einen detaillierten Verlauf der Vorgänge in Ihrem MinIO-Cluster erhalten.",
  "Publish Audit Logs to an HTTP webhook":
    "Audit-Protokolle an einen HTTP-Webhook senden",
  "You can configure a new HTTP webhook endpoint  to which S3 LuisML publishes audit logs using either  environment variables or by setting runtime  configuration settings":
    "Sie können einen neuen HTTP-Webhook-Endpunkt konfigurieren, an den S3 LuisML Audit-Protokolle über Umgebungsvariablen oder Laufzeiteinstellungen sendet.",
  "Publish Audit Logs to an External Service":
    "Audit-Protokolle an einen externen Dienst veröffentlichen",
  "Audit logs are granular descriptions of each operation  on the S3 LuisML deployment supporting security  standards and regulations which require  detailed tracking of operations.":
    "Prüfprotokolle sind detaillierte Beschreibungen aller Vorgänge in der S3 LuisML-Bereitstellung, die Sicherheitsstandards und -vorschriften unterstützen, die eine detaillierte Nachverfolgung der Vorgänge erfordern.",
  "Publish Events to Kafka": "Ereignisse an Kafka senden",
  "S3 LuisML supports publishing bucket notification events to a Kafka service endpoint.":
    "S3 LuisML unterstützt die Veröffentlichung von Bucket-Benachrichtigungsereignissen an einen Kafka-Dienstendpunkt.",
  "Kafka Service for Bucket Notifications":
    "Kafka-Dienst für Bucket-Benachrichtigungen",
  "Learn about environment variables for configuring a Kafka service as a target for Bucket Nofitications.":
    "Erfahren Sie mehr über Umgebungsvariablen zum Konfigurieren eines Kafka-Dienstes als Ziel für Bucket-Benachrichtigungen.",
  "Kafka Service Configuration Settings":
    "Konfigurationseinstellungen für den Kafka-Dienst",
  "Supported Bucket Notification Targets":
    "Unterstützte Bucket-Benachrichtigungsziele",
  "Learn which notification targets are supported by S3 LuisML.":
    "Erfahren Sie, welche Benachrichtigungsziele von S3 LuisML unterstützt werden.",
  "Bucket Notifications": "Bucket-Benachrichtigungen",
  "S3 LuisML bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events.":
    "S3 LuisML Bucket-Benachrichtigungen ermöglichen Administratoren das Senden von Benachrichtigungen an unterstützte externe Dienste zu bestimmten Objekt- oder Bucket-Ereignissen.",
  "Need more help? Check out additional Troubleshooting options":
    "Benötigen Sie weitere Hilfe? Sehen Sie sich weitere Optionen zur Fehlerbehebung an",
  "Site Replication Prerequisite":
    "Voraussetzungen für die Standortreplikation",
  "Check that your setup meets the requirements to deploy Site Replication":
    "Prüfen Sie, ob Ihre Umgebung die Voraussetzungen für die Standortreplikation erfüllt",
  "Site replication configures multiple independent S3 LuisML deployments as a cluster of replicas called peer sites.":
    "Die Standortreplikation verbindet mehrere unabhängige S3 LuisML-Bereitstellungen zu einem Replikationsverbund sogenannter Peer-Standorte.",
  "Site Replication Overview": "Übersicht über die Standortreplikation",
  "See what changes are and are NOT replicated between peer sites":
    "Sehen Sie, welche Änderungen zwischen Peer-Standorten repliziert werden und welche NICHT",
  "Site Replication Tutorial": "Tutorial zur Standortreplikation",
  "Learn how to set up site replication using Console and the S3 LuisML client (mc)":
    "Erfahren Sie, wie Sie die Standortreplikation mit der Konsole und dem S3 LuisML-Client (mc) einrichten.",
  "Transition from S3 LuisML to Azure": "Übergang von S3 LuisML zu Azure",
  "See the procedure to create a new object lifecycle management rule that transition objects from a S3 LuisML bucket to a remote storage tier on the Azure storage backend.":
    "Sehen Sie sich das Verfahren zum Erstellen einer neuen Objektlebenszyklus-Verwaltungsregel an, die Objekte von einem S3 LuisML-Bucket in eine Remotespeicherebene im Azure-Speicher-Backend überführt.",
  "Transition from S3 LuisML to GCS": "Übergang von S3 LuisML zu GCS",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Google Cloud Storage backend.":
    "Sehen Sie sich das Verfahren zum Erstellen einer neuen Objektlebenszyklus-Verwaltungsregel an, die Objekte von einem S3 LuisML-Bucket in eine Remote-Speicherebene im Google Cloud Storage-Backend überführt.",
  "Transition from S3 LuisML to S3": "Übergang von S3 LuisML zu S3",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Amazon Web Services S3 storage backend or an S3-compatible service.":
    "Sehen Sie sich das Verfahren zum Erstellen einer neuen Objektlebenszyklus-Verwaltungsregel an, die Objekte von einem S3 LuisML-Bucket in eine Remote-Speicherebene im S3-Speicher-Backend von Amazon Web Services oder einen S3-kompatiblen Dienst überführt.",
  "Transition to Remote S3 LuisML Deployment":
    "Übergang zu einer Remote-S3 LuisML-Bereitstellung",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a bucket on a primary S3 LuisML deployment to a bucket on a remote S3 LuisML deployment. ":
    "Sehen Sie sich das Verfahren zum Erstellen einer neuen Objektlebenszyklus-Verwaltungsregel an, die Objekte von einem Bucket in einer primären S3 LuisML-Bereitstellung in einen Bucket in einer Remote-S3 LuisML-Bereitstellung überführt.",
  "Object Lifecycle Management": "Objektlebenszyklusmanagement",
  "Use S3 LuisML Object Lifecycle Management to create rules for time or date based automatic transition or expiry of objects.":
    "Verwenden Sie S3 LuisML Object Lifecycle Management, um Regeln für den zeit- oder datumsbasierten automatischen Übergang oder Ablauf von Objekten zu erstellen.",
  "MinIO Feature Overview: Object Lifecycle Management":
    "MinIO Funktionsübersicht: Object Lifecycle Management",
  "Learn about MinIO's object lifecycle management capabilities.":
    "Erfahren Sie mehr über die Funktionen zur Verwaltung des Objektlebenszyklus von MinIO.",
  "Lifecycle Management I - Tiers": "Lifecycle Management I – Speicherebenen",
  "In this video we will cover expiration and transition of objects to an alternate tier of storage.":
    "In diesem Video behandeln wir den Ablauf und den Übergang von Objekten in eine alternative Speicherebene.",
  Tiers: "Tiers",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Azure storage backend.":
    "Sehen Sie sich das Verfahren zum Erstellen einer neuen Objektlebenszyklus-Verwaltungsregel an, die Objekte von einem S3 LuisML-Bucket in eine Remotespeicherebene im Azure-Speicher-Backend überführt.",
  "Console Metrics Dashboard": "Konsolenmetrik-Dashboard",
  "The S3 LuisML Console provides a point-in-time metrics dashboard by default, and also supports displaying time-series and historical data by querying a Prometheus service configured to scrape data from the S3 LuisML deployment.":
    "Die S3 LuisML-Konsole bietet standardmäßig ein Point-in-Time-Metrik-Dashboard und unterstützt auch die Anzeige von Zeitreihen und historischen Daten durch Abfragen eines Prometheus-Dienstes, der zum Scrapen von Daten aus der S3 LuisML-Bereitstellung konfiguriert ist.",
  "Available Metrics": "Verfügbare Metriken",
  "Learn about the different Prometheus metrics published by S3 LuisML server":
    "Erfahren Sie mehr über die verschiedenen Prometheus-Metriken, die vom S3 LuisML-Server veröffentlicht werden",
  "Metrics and Alerts": "Metriken und Warnungen",
  "For historical metrics and analytics, S3 LuisML publishes cluster and node metrics using the Prometheus Data Model.":
    "Für historische Metriken und Analysen veröffentlicht S3 LuisML Cluster- und Knotenmetriken mithilfe des Prometheus-Datenmodells.",
  "Learn about the monitoring features available  in your MinIO Console.":
    "Erfahren Sie mehr über die Überwachungsfunktionen, die in Ihrer MinIO-Konsole verfügbar sind.",
  "User Management": "Benutzerverwaltung",
  "Each user can have one or more assigned policies that explicitly list the actions and resources to which that user has access. Users can also inherit policies from the groups in which they have membership.":
    "Jedem Benutzer können eine oder mehrere Richtlinien zugewiesen werden, die explizit die Aktionen und Ressourcen auflisten, auf die dieser Benutzer Zugriff hat. Benutzer können auch Richtlinien von den Gruppen erben, in denen sie Mitglied sind.",
  "Group Management": "Gruppenverwaltung",
  "A group is a collection of users. Each group can have one or more assigned policies that explicitly list the actions and resources to which group members are allowed or denied access.":
    "Eine Gruppe ist eine Sammlung von Benutzern. Jeder Gruppe können eine oder mehrere Richtlinien zugewiesen werden, die explizit die Aktionen und Ressourcen auflisten, zu denen Gruppenmitgliedern der Zugriff gewährt oder verweigert wird.",
  "MinIO Identity and Access Management: Part 3 - Interfacing with OpenID and LDAP":
    "MinIO Identitäts- und Zugriffsmanagement: Teil 3 – Schnittstelle zu OpenID und LDAP",
  "This video is focused on interfacing with OpenID and LDAP to manage access to MinIO.":
    "Dieses Video konzentriert sich auf die Schnittstelle mit OpenID und LDAP, um den Zugriff auf MinIO zu verwalten.",
  "MinIO Authentication and Authorization Using OpenID and Keycloak":
    "MinIO Authentifizierung und Autorisierung mit OpenID und Keycloak",
  "In this video you will learn how to set up an OpenID service, Keycloak, to provide authentication and authorization as part of a MinIO deployment.":
    "In diesem Video erfahren Sie, wie Sie einen OpenID-Dienst Keycloak einrichten, um Authentifizierung und Autorisierung als Teil einer MinIO-Bereitstellung bereitzustellen.",
  "Drive Healing": "Laufwerksreparatur",
  "The Drives section displays the healing status for a bucket.":
    "Im Abschnitt „Laufwerke“ wird der Reparaturstatus für einen Bucket angezeigt.",
  "Erasure Coding": "Löschcodierung",
  "S3 LuisML Erasure Coding is a data redundancy and availability feature that allows S3 LuisML deployments to automatically reconstruct objects on-the-fly despite the loss of multiple drives or nodes in the cluster.":
    "S3 LuisML Erasure Coding ist eine Datenredundanz- und Verfügbarkeitsfunktion, die es S3 LuisML Bereitstellungen ermöglicht, Objekte im laufenden Betrieb automatisch zu rekonstruieren, auch wenn mehrere Laufwerke oder Knoten im Cluster verloren gehen.",
  "Site Healing": "Standortreparatur",
  "Any S3 LuisML deployment in the site replication configuration can resynchronize damaged replica-eligible data from the peer with the most updated (“latest”) version of that data.":
    "Jede S3 LuisML-Bereitstellung in der Standortreplikation kann beschädigte replizierbare Daten vom Peer-Standort mit der aktuellsten Version neu synchronisieren.",
  Healing: "Selbstreparatur",
  "S3 LuisML Automatically Heals Corrupt or Missing Data On-the-fly":
    "S3 LuisML repariert beschädigte oder fehlende Daten automatisch im laufenden Betrieb",
  "In this video, we will provide an overview of site-wide replication.":
    "In diesem Video geben wir einen Überblick über die standortweite Replikation.",
  Health: "Systemzustand",
  "The health section provides an interface for running a health diagnostic for the S3 LuisML Deployment. The report is generated on the deployment and downloaded directly to your browser.":
    "Der Abschnitt „Systemzustand“ bietet eine Schnittstelle zum Ausführen einer Systemdiagnose für die S3 LuisML-Bereitstellung. Der Bericht wird auf dem Server generiert und direkt im Browser heruntergeladen.",
  "IDP Docs": "IDP-Dokumentation",
  "S3 LuisML supports multiple external identity managers through OpenID Connect-Compatible Active Directory / LDAP":
    "S3 LuisML unterstützt mehrere externe Identitätsmanager durch OpenID Connect-kompatibles Active Directory / LDAP",
  "Built-in S3 LuisML IDP": "Integrierter S3 LuisML-IDP",
  "S3 LuisML includes a built-in IDentity Provider (IDP) that provides core identity management functionality.":
    "S3 LuisML enthält einen integrierten Identitätsanbieter (IDP), der zentrale Funktionen zur Identitätsverwaltung bereitstellt.",
  "Active Directory / LDAP Access Management":
    "Active Directory / LDAP-Zugriffsverwaltung",
  "For identities managed by the external AD/LDAP provider, S3 LuisML uses the user’s Distinguished Name and attempts to map it against an existing policy.":
    "Für Identitäten, die vom externen AD/LDAP-Anbieter verwaltet werden, verwendet S3 LuisML den Distinguished Name des Benutzers und versucht, ihn einer vorhandenen Richtlinie zuzuordnen.",
  "Keycloak configuration": "Keycloak-Konfiguration",
  "You can configure S3 LuisML to use Keycloak as an external IDentity Provider (IDP) for authentication of users via the OpenID Connect (OIDC) protocol.":
    "Sie können S3 LuisML so konfigurieren, dass Keycloak als externer Identitätsanbieter (IDP) für die Authentifizierung von Benutzern über OpenID Connect (OIDC) verwendet wird.",
  "LDAP Configuration": "LDAP-Konfiguration",
  "S3 LuisML supports configuring a single Active Directory / LDAP Connect for external management of user identities.":
    "S3 LuisML unterstützt die Konfiguration eines einzelnen Active Directory / LDAP Connect für die externe Verwaltung von Benutzeridentitäten.",
  "OIDC Configuration": "OIDC-Konfiguration",
  "S3 LuisML supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.":
    "S3 LuisML unterstützt die Verwendung eines mit OpenID Connect (OIDC) kompatiblen Identitätsanbieters (IDP) wie Okta, Keycloak, Dex, Google oder Facebook für die externe Verwaltung von Benutzeridentitäten.",
  "KMS overview": "KMS-Übersicht",
  "MinIO's cryptographic expert shares why MinIO built KES, what it is used for and how it fits into the MinIO architecture.":
    "Der Kryptografieexperte von MinIO erzählt, warum MinIO KES gebaut hat, wofür es verwendet wird und wie es in die MinIO-Architektur passt.",
  "Learn about key management using KMS.":
    "Erfahren Sie mehr über die Schlüsselverwaltung mit KMS.",
  "Text snippet that will be relevant to the user will  go here  made to look nice in the helpitem size  on two-three lines":
    "Textausschnitte, die für den Benutzer relevant sind, werden hier angezeigt und so gestaltet, dass sie in der Helpitem-Größe auf zwei bis drei Zeilen gut aussehen",
  "Error logs can be filtered by node and log type, as well as search for specific text in the logs.":
    "Fehlerprotokolle können nach Knoten und Protokolltyp gefiltert werden sowie nach spezifischem Text in den Protokollen gesucht werden.",
  "Audit Logs": "Auditprotokolle",
  "You can configure an HTTP webhook endpoint to which S3 LuisML publishes audit logs using either environment variables or by setting runtime configuration settings.":
    "Sie können einen HTTP Webhook-Endpunkt konfigurieren, auf dem S3 LuisML Prüfprotokolle veröffentlicht, indem Sie entweder Umgebungsvariablen oder Laufzeitkonfigurationseinstellungen festlegen.",
  "Object Lambda": "Object Lambda",
  "S3 LuisML’s Object Lambda enables developers to programmatically transform objects on demand.":
    "SILOs Object Lambda ermöglicht es Entwicklern, Objekte bei Bedarf programmgesteuert zu transformieren.",
  "MinIO Event Notifications - Overview":
    "MinIO Ereignisbenachrichtigungen – Übersicht",
  "Use the Event framework to see what's going on in the system using Bucket, Object, Replication and ILM events.":
    "Verwenden Sie das Event-Framework, um mithilfe von Bucket-, Objekt-, Replikations- und ILM-Ereignissen zu sehen, was im System vor sich geht.",
  "Managing Event Notifications Using MinIO MC Commands":
    "Verwalten von Ereignisbenachrichtigungen mit MinIO MC-Befehlen",
  "This video provides an overview of the types of event notifications and how to set them up using MinIO's mc commands.":
    "Dieses Video bietet einen Überblick über die Arten von Ereignisbenachrichtigungen und wie man sie mit den mc-Befehlen von MinIO einrichtet.",
  "MinIO Events Notifications - Setting Up Webhooks Using Python":
    "MinIO Ereignisbenachrichtigungen – Einrichten von Webhooks mit Python",
  "This video provides an overview of how to use Python and Flask to set up a Webhook on MinIO. ":
    "Dieses Video bietet einen Überblick darüber, wie Sie mit Python und Flask eine Webhook auf MinIO einrichten.",
  "MinIO Event Notifications - Using The MinIO Python SDK to Write Custom Webhooks":
    "MinIO Ereignisbenachrichtigungen – Verwenden von MinIO Python SDK zum Schreiben benutzerdefinierter Webhooks",
  "This video dives deeper into using the MinIO Python SDK to setup and manage notifications.":
    "Dieses Video befasst sich eingehender mit der Verwendung von MinIO Python SDK zum Einrichten und Verwalten von Benachrichtigungen.",
  "Object Management": "Objektverwaltung",
  "Learn about Objects and how  S3 LuisML allows you to manage them":
    "Erfahren Sie mehr über Objekte und wie Sie mit S3 LuisML diese verwalten können",
  "Managing Objects with the Object Browser":
    "Verwalten von Objekten mit dem Objektbrowser",
  "Learn how to use the Console Object Browser  to manage your Objects":
    "Erfahren Sie, wie Sie den Console Object Browser zum Verwalten Ihrer Objekte verwenden",
  "Manipulating Objects": "Objekte manipulieren",
  "A demo of Prefixes & Objects with examples of copying and deleting an object, as well as CopySource Object.":
    "Eine Demo von Präfixen und Objekten mit Beispielen zum Kopieren und Löschen eines Objekts sowie CopySource Object.",
  "Example Policy - Bucket Resource Access":
    "Beispielrichtlinie – Zugriff auf Bucket-Ressourcen",
  "An example policy demonstrating authorization  limited to a named bucket":
    "Eine Beispielrichtlinie, die die auf einen benannten Bucket beschränkte Autorisierung demonstriert",
  Performance: "Leistung",
  "The performance section provides an interface for running a performance test of the deployment.":
    "Der Abschnitt „Leistung“ bietet eine Schnittstelle zum Ausführen eines Leistungstests der Bereitstellung.",
  Profile: "Profil",
  "The profile section provides an interface for running system profiling of the deployment. The results can provide insight into the S3 LuisML server process running on a given node.":
    "Der Profilabschnitt bietet eine Schnittstelle zum Ausführen der Systemprofilierung der Bereitstellung. Die Ergebnisse können Einblick in den S3 LuisML-Serverprozess geben, der auf einem bestimmten Knoten ausgeführt wird.",
  Inspect: "Untersuchen",
  "The inspect section provides an interface for capturing the erasure-coded metadata associated to an object or objects.":
    "Der Prüfabschnitt bietet eine Schnittstelle zum Erfassen der löschcodierten Metadaten, die einem oder mehreren Objekten zugeordnet sind.",
  "Encrypt Inspect Output": "Inspektionsausgabe verschlüsseln",
  "You can encrypt the output of the mc support inspect command for enhanced security when transferring the files off the deployment.":
    "Sie können die Ausgabe von mc support inspect verschlüsseln, um Dateien sicherer aus der Bereitstellung zu übertragen.",
  "What is Trace?": "Was ist Trace?",
  "The trace section provides HTTP trace functionality for a bucket or buckets on the deployment.":
    "Der Abschnitt „Tracing“ bietet HTTP-Trace-Funktionalität für einen oder mehrere Buckets in der Bereitstellung.",
  Users: "Benutzer",
  "What is Watch?": "Was ist Watch?",
  "The Watch section displays S3 events as they occur on the selected bucket.":
    "Im Abschnitt „Watch“ werden S3-Ereignisse angezeigt, sobald sie im ausgewählten Bucket auftreten.",
  "Access Managemnt": "Zugriffsverwaltung",
  "Object Locking": "Objektsperre",
  "S3 LuisML Object Locking (“Object Retention”) enforces Write-Once Read-Many (WORM) immutability to protect versioned objects from deletion.":
    "Die S3 LuisML-Objektsperre („Objektaufbewahrung“) erzwingt Write-Once-Read-Many-Unveränderlichkeit (WORM), um versionierte Objekte vor dem Löschen zu schützen.",
  Encryption: "Verschlüsselung",
  "S3 LuisML Server-Side Encryption (SSE) protects objects as part of write operations, allowing clients to take advantage of server processing power to secure objects at the storage layer (encryption-at-rest).":
    "Die serverseitige Verschlüsselung (SSE) von S3 LuisML schützt Objekte beim Schreiben, sodass Objekte auf der Speicherebene verschlüsselt abgelegt werden (Encryption-at-Rest).",
  "Learn how to use Console to manage Buckets":
    "Erfahren Sie, wie Sie Buckets mit der Konsole verwalten",
  "Bucket Replication": "Bucket-Replikation",
  "S3 LuisML server-side bucket replication is an automatic bucket-level configuration that synchronizes objects between a source and destination bucket.":
    "Die serverseitige Bucket-Replikation von S3 LuisML ist eine automatische Konfiguration auf Bucket-Ebene, die Objekte zwischen einem Quell- und einem Ziel-Bucket synchronisiert.",
  "This video gives an overview of how to set up and use object versioning as part of a data lifecycle management strategy.":
    "Dieses Video gibt einen Überblick über die Einrichtung und Verwendung der Objektversionierung als Teil einer Datenlebenszyklus-Managementstrategie.",
  "Versioning Lab": "Praxisübung: Versionierung",
  "This demo will take you through the steps to manage versioned objects using the MinIO command line tools.":
    "Diese Demo führt Sie durch die Schritte zum Verwalten versionierter Objekte mithilfe der MinIO-Befehlszeilentools.",
  "Bucket Replication Requirements": "Anforderungen an die Bucket-Replikation",
  "Check here to ensure you meet the prerequisites before setting up any replication configurations.":
    "Überprüfen Sie hier, ob Sie die Voraussetzungen erfüllen, bevor Sie Replikationskonfigurationen einrichten.",
  "Bucket Replication Overview": "Überblick über die Bucket-Replikation",
  "In this video, we will cover bucket level replication, both active-passive and active-active.":
    "In diesem Video behandeln wir die Replikation auf Bucket-Ebene, sowohl Aktiv-Passiv als auch Aktiv-Aktiv.",
  "Replication Lab I": "Praxisübung Replikation I",
  "Demonstrates bucket replication concepts using MinIO Client, including active-passive and active-active replication.":
    "Demonstriert Bucket-Replikationskonzepte mit MinIO Client, einschließlich Aktiv-Passiv- und Aktiv-Aktiv-Replikation.",
  "Replication Lab II": "Praxisübung Replikation II",
  "Demonstrates site replication concepts using MinIO Client, including active-passive and active-active replication.":
    "Demonstriert Site-Replikationskonzepte mit MinIO Client, einschließlich Aktiv-Passiv- und Aktiv-Aktiv-Replikation.",
  "Access Management": "Zugriffsverwaltung",
  "Logging in": "Anmelden",
  "Sign in with the root credentials, an IAM user access key, or temporary STS credentials via Other Authentication Methods.":
    "Melden Sie sich mit den Root-Anmeldeinformationen, einem IAM-Benutzerzugriffsschlüssel oder temporären STS-Anmeldeinformationen über andere Authentifizierungsmethoden an.",
  "Console configuration": "Konsolenkonfiguration",
  "Configure identity providers, TLS, and session settings for the console on the server side.":
    "Konfigurieren Sie Identitätsanbieter, TLS und Sitzungseinstellungen für die Konsole auf der Serverseite.",
  "Replication Internals": "Replikationsinterna",
  "Learn details of the S3 LuisML replication process.":
    "Erfahren Sie Einzelheiten zum S3 LuisML-Replikationsprozess.",
  "One-way Bucket Replication": "Einweg-Bucket-Replikation",
  "Guidance on configuring one-way Bucket replication using S3 LuisML Console.":
    "Anleitung zur Konfiguration der unidirektionalen Bucket-Replikation mit der S3 LuisML-Konsole.",
  "Two-way Bucket Replication": "Zwei-Wege-Bucket-Replikation",
  "Guidance on configuring two-way (active-active) Bucket replication using S3 LuisML Console.":
    "Anleitung zur Konfiguration der bidirektionalen (aktiv-aktiv) Bucket-Replikation mithilfe der S3 LuisML-Konsole.",
};

export default messages;
