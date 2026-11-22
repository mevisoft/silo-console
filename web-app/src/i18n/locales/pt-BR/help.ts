// Copyright (c) 2026 Pigsty
// Brazilian Portuguese translation: Eduardo Andrade Machado (PR #83).
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Brazilian Portuguese translations for helpTopics.json entries (titles, bodies,
// markdown headers). Keys are the EXACT English source strings — do not edit or
// re-wrap them.
const ptHelp: Record<string, string> = {
  "### Users\n\nA S3 LuisML user consists of a unique access key (username) and corresponding secret key (password). Clients must authenticate their identity by specifying both a valid access key (username) and the corresponding secret key (password) of an existing S3 LuisML user.\n\nGroups provide a simplified method for managing shared permissions among users with common access patterns and workloads.\n\nUsers inherit access permissions to data and resources through the groups they belong to.\n\nSILO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.\n\nEach user can access only those resources and operations which are explicitly granted by the built-in role. S3 LuisML denies access to any other resource or action by default.":
    "### Usuários\n\nUm usuário do S3 LuisML é formado por uma chave de acesso única (nome de usuário) e pela chave secreta correspondente (senha). Os clientes precisam se autenticar informando uma chave de acesso válida (nome de usuário) e a chave secreta correspondente (senha) de um usuário existente do S3 LuisML.\n\nOs grupos oferecem uma forma simples de gerenciar permissões compartilhadas entre usuários com padrões de acesso e cargas de trabalho em comum.\n\nOs usuários herdam permissões de acesso a dados e recursos por meio dos grupos a que pertencem.\n\nO S3 LuisML usa controle de acesso baseado em políticas (PBAC) para definir as ações e os recursos autorizados a que um usuário autenticado tem acesso. Cada política descreve uma ou mais ações e condições que delimitam as permissões de um usuário ou grupo de usuários.\n\nCada usuário só pode acessar os recursos e as operações concedidos explicitamente pelo papel embutido. Por padrão, o S3 LuisML nega o acesso a qualquer outro recurso ou ação.",
  "### IAM policies\n\nSILO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.\n\nSILO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The S3 LuisML documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.":
    "### Políticas IAM\n\nO S3 LuisML usa controle de acesso baseado em políticas (PBAC) para definir as ações e os recursos autorizados a que um usuário autenticado tem acesso. Cada política descreve uma ou mais ações e condições que delimitam as permissões de um usuário ou grupo de usuários.\n\nO PBAC do S3 LuisML foi criado para ser compatível com a sintaxe, a estrutura e o comportamento das políticas do AWS IAM. A documentação do S3 LuisML busca cobrir o comportamento e as funcionalidades específicas do IAM. Para temas específicos do AWS IAM, consulte a documentação do IAM, que é mais completa.",
  "### Access keys\n\nSILO access keys are child identities of an authenticated S3 LuisML user, including externally managed identities. Each access key inherits its privileges based on the policies attached to it’s parent user or those groups in which the parent user has membership. Access Keys also support an optional inline policy which further restricts access to a subset of actions and resources available to the parent user.":
    "### Chaves de acesso\n\nAs chaves de acesso do S3 LuisML são identidades filhas de um usuário autenticado do S3 LuisML, incluindo identidades gerenciadas externamente. Cada chave de acesso herda seus privilégios das políticas anexadas ao usuário pai ou aos grupos dos quais ele é membro. As chaves de acesso também aceitam uma política inline opcional, que restringe ainda mais o acesso a um subconjunto das ações e dos recursos disponíveis para o usuário pai.",
  "### Event destinations\n\nSILO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. S3 LuisML supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.":
    "### Destinos de eventos\n\nAs notificações de bucket do S3 LuisML permitem que administradores enviem notificações a serviços externos compatíveis quando ocorrem determinados eventos de objeto ou de bucket. O S3 LuisML aceita eventos S3 em nível de bucket e de objeto, semelhantes às notificações de eventos do Amazon S3.",
  "### Inspect examples\n\nDownload object metadata or constituent parts from the drives as a ZIP archive. Enable **Encrypt** to protect the downloaded archive; save the decryption key when it is shown.\n\n- **Object metadata:** Volume/Bucket `test-bucket`, Path `test*/xl.meta`.\n- **Object parts:** Volume/Bucket `test-bucket`, Path `test*/*/part.*`.\n- **Recursive prefix:** Volume/Bucket `test-bucket`, Path `test/**`.\n\n**Caution:** Recursive inspection can be expensive. Limit the bucket and path before starting; use recursive patterns only when necessary.":
    "### Exemplos de inspeção\n\nBaixe metadados ou partes de objetos dos discos como um arquivo ZIP. Ative **Criptografar** para proteger o arquivo baixado e salve a chave de descriptografia quando ela for exibida.\n\n- **Metadados do objeto:** volume/bucket `test-bucket`, caminho `test*/xl.meta`.\n- **Partes do objeto:** volume/bucket `test-bucket`, caminho `test*/*/part.*`.\n- **Prefixo recursivo:** volume/bucket `test-bucket`, caminho `test/**`.\n\n**Atenção:** a inspeção recursiva pode ser custosa. Limite o bucket e o caminho antes de começar e use padrões recursivos só quando necessário.",
  Troubleshooting: "Solução de problemas",
  "Need more help?  Check out additional Troubleshooting options":
    "Precisa de mais ajuda? Veja outras opções de solução de problemas",
  "Identity and Access Management": "Gerenciamento de identidade e acesso",
  "S3 LuisML uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access.":
    "O S3 LuisML usa controle de acesso baseado em políticas (PBAC) para definir as ações e os recursos autorizados a que um usuário autenticado tem acesso.",
  "Policy based access control": "Controle de acesso baseado em políticas",
  "Learn how Policy-Based Access Control (PBAC)  is used to define the authorized actions and resources  to which an authenticated user has access":
    "Saiba como o controle de acesso baseado em políticas (PBAC) é usado para definir as ações e os recursos autorizados a que um usuário autenticado tem acesso",
  "OpenID Connect Access Management":
    "Gerenciamento de acesso com OpenID Connect",
  "Learn more about connecting S3 LuisML to OpenID for access management.":
    "Saiba mais sobre como conectar o S3 LuisML ao OpenID para gerenciar o acesso.",
  "MinIO Identity and Access Management: Part 1 - Overview And Modification of Built In Policies":
    "Gerenciamento de identidade e acesso do MinIO: parte 1 – Visão geral e alteração das políticas embutidas",
  "This video introduces MinIO IAM policies, including an overview of the built-in policies, and how to create and remove a policy.":
    "Este vídeo apresenta as políticas IAM do MinIO, com uma visão geral das políticas embutidas e de como criar e remover uma política.",
  "MinIO Identity and Access Management: Part 4 - Lab - Setting Up Users, Groups, and Policies":
    "Gerenciamento de identidade e acesso do MinIO: parte 4 – Laboratório: configuração de usuários, grupos e políticas",
  "This Lab video demonstrates setting up identity and access management based Users, Groups and Policies. ":
    "Este vídeo de laboratório demonstra a configuração de usuários, grupos e políticas no gerenciamento de identidade e acesso. ",
  "MinIO Identity and Access Management: Part 5 - Lab - Creating A Custom Policy":
    "Gerenciamento de identidade e acesso do MinIO: parte 5 – Laboratório: criação de uma política personalizada",
  "This Lab video demonstrates creating custom IAM policies.":
    "Este vídeo de laboratório demonstra a criação de políticas IAM personalizadas.",
  "MinIO Identity and Access Management: Part 6 - Lab - Interfacing With OpenID and LDAP":
    "Gerenciamento de identidade e acesso do MinIO: parte 6 – Laboratório: integração com OpenID e LDAP",
  "This Lab video demonstrates interfacing with OpenID and LDAP. ":
    "Este vídeo de laboratório demonstra a integração com OpenID e LDAP. ",
  "# Bucket \n A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.":
    "# Bucket \n Um bucket é semelhante a uma pasta ou diretório em um sistema de arquivos; cada bucket pode conter um número arbitrário de objetos.",
  "Bucket Versioning": "Versionamento de bucket",
  "S3 LuisML supports keeping multiple “versions” of an object in a single bucket. S3 LuisML versioning protects from unintended overwrites and deletions while providing support for “undoing” a write operation.":
    "O S3 LuisML pode manter várias “versões” de um objeto em um único bucket. O versionamento do S3 LuisML protege contra sobrescritas e exclusões acidentais e permite “desfazer” uma operação de escrita.",
  Buckets: "Buckets",
  "Learn about using Console to create and manage Buckets with S3 LuisML":
    "Saiba como usar o Console para criar e gerenciar buckets no S3 LuisML",
  "Creating Buckets and Users through the MinIO Console":
    "Criação de buckets e usuários pelo Console do MinIO",
  "Learn how to manage your storage buckets and objects with a hands-on introduction to the MinIO Console and SDKs.":
    "Aprenda a gerenciar seus buckets e objetos com uma introdução prática ao Console e aos SDKs do MinIO.",
  "Console Introduction - Add a Bucket and a User":
    "Introdução ao Console: adicionar um bucket e um usuário",
  "This session shows how to create AWS S3 buckets and users with MinIO Console.":
    "Esta sessão mostra como criar buckets S3 e usuários com o Console do MinIO.",
  "Object Locking and Retention": "Bloqueio de objetos e retenção",
  "In this video we talk about object retention, WORM (Write Once Read Many), as well as duration based and legal holds.":
    "Neste vídeo, falamos sobre retenção de objetos, WORM (Write Once Read Many) e retenções por prazo e legais.",
  "Object Locking and Retention Lab":
    "Laboratório de bloqueio de objetos e retenção",
  "This lab demonstrates creation and removal of both bucket and object specific retention, compliance, and legal holds. ":
    "Este laboratório demonstra a criação e a remoção de retenção, conformidade e retenção legal, tanto de bucket quanto de objeto. ",
  "Versioning and Lifecycle Management":
    "Versionamento e gerenciamento do ciclo de vida",
  "In this video, we will focus on versioning and lifecycle management.":
    "Neste vídeo, vamos nos concentrar em versionamento e gerenciamento do ciclo de vida.",
  Versioning: "Versionamento",
  "Learn how Versioning gives access to the full history of an object from its creation through each update.":
    "Saiba como o versionamento dá acesso ao histórico completo de um objeto, desde a criação até cada atualização.",
  "Learn how versioning protects your data from unintended overwrites and deletions":
    "Saiba como o versionamento protege seus dados contra sobrescritas e exclusões acidentais",
  "Learn how to create and manage Buckets":
    "Saiba como criar e gerenciar buckets",
  "In this video, we will focus on versioning  and lifecycle management.":
    "Neste vídeo, vamos nos concentrar em versionamento e gerenciamento do ciclo de vida.",
  "Policy Document Structure": "Estrutura do documento de política",
  "S3 LuisML policy documents use the same schema as AWS IAM Policy documents. See policy templates and allowed S3 Policy actions and condition keys in our docs.":
    "Os documentos de política do S3 LuisML usam o mesmo esquema dos documentos de política do AWS IAM. Veja modelos de política e as ações e chaves de condição de política S3 permitidas na nossa documentação.",
  "Access Keys": "Chaves de acesso",
  "Access Keys support providing applications authentication credentials which inherit permissions from the “parent” user.":
    "As chaves de acesso fornecem a aplicações credenciais de autenticação que herdam as permissões do usuário “pai”.",
  "Policy Variables": "Variáveis de política",
  "S3 LuisML supports using policy variables for automatically substituting context from the authenticated user and/or the operation into the user’s assigned policy or policies.":
    "O S3 LuisML aceita variáveis de política para substituir automaticamente o contexto do usuário autenticado e/ou da operação nas políticas atribuídas ao usuário.",
  "Admin Policy Action Keys": "Chaves de ação de política administrativa",
  "See actions supported in defining policies for S3 LuisML admin operations. These actions are only valid for S3 LuisML deployments and are not intended for use with other S3-compatible services.":
    "Veja as ações disponíveis para definir políticas de operações administrativas do S3 LuisML. Essas ações só são válidas em implantações do S3 LuisML e não se destinam a outros serviços compatíveis com S3.",
  "Admin Policy Condition Keys":
    "Chaves de condição de política administrativa",
  "See which conditions S3 LuisML supports for use with defining policies for admin actions.":
    "Veja quais condições o S3 LuisML aceita ao definir políticas para ações administrativas.",
  "Supported S3 Policy Condition Keys":
    "Chaves de condição de política S3 compatíveis",
  "S3 LuisML policy documents support IAM conditional statements.":
    "Os documentos de política do S3 LuisML aceitam instruções condicionais do IAM.",
  "Supported S3 Policy Actions": "Ações de política S3 compatíveis",
  "S3 LuisML policy documents support a subset of IAM S3 Action keys.":
    "Os documentos de política do S3 LuisML aceitam um subconjunto das chaves de ação S3 do IAM.",
  "MinIO Identity and Access Management: Part 2 - Using IDP to Manage Users And Groups":
    "Gerenciamento de identidade e acesso do MinIO: parte 2 – Uso de IDP para gerenciar usuários e grupos",
  "This video discusses Users and Groups, and how policies can be applied to them to enable specific permissions.":
    "Este vídeo trata de usuários e grupos e de como aplicar políticas a eles para conceder permissões específicas.",
  "S3 LuisML versioning protects from unintended overwrites and deletions while providing support for “undoing” a write operation.":
    "O versionamento do S3 LuisML protege contra sobrescritas e exclusões acidentais e permite “desfazer” uma operação de escrita.",
  "Lifecycle Management II - Versioning and Lifecycle Management":
    "Gerenciamento do ciclo de vida II – Versionamento e gerenciamento do ciclo de vida",
  "Creating a New Bucket in a Specific Region":
    "Criar um novo bucket em uma região específica",
  "A Bucket can be created in a specified region":
    "Um bucket pode ser criado em uma região especificada",
  "What are Settings and Configurations?":
    "O que são parâmetros e configurações?",
  "These configuration settings define runtime  behavior of the S3 LuisML server process,  comparable to the mc admin config command":
    "Estes parâmetros de configuração definem o comportamento em tempo de execução do processo do servidor S3 LuisML, de forma comparável ao comando mc admin config",
  "MinIO Feature Overview: Active-Active Replication":
    "Visão geral dos recursos do MinIO: replicação ativo-ativo",
  "Learn about MinIO's object replication capabilities and how MinIO provides resilience to common storage disruption scenarios.":
    "Conheça os recursos de replicação de objetos do MinIO e como ele oferece resiliência a falhas comuns de armazenamento.",
  "How is failed replication handled?":
    "Como a replicação com falha é tratada?",
  "S3 LuisML queues failed replication operations and retries those operations until replication succeeds.":
    "O S3 LuisML coloca as operações de replicação com falha em uma fila e as repete até que a replicação seja concluída.",
  "What are Replication Workers?": "O que são workers de replicação?",
  "S3 LuisML uses a replication queuing system with multiple concurrent replication workers operating on that queue.":
    "O S3 LuisML usa um sistema de filas de replicação com vários workers de replicação simultâneos operando nessa fila.",
  "These configuration settings define runtime behavior of the S3 LuisML server process,  comparable to the mc admin config command":
    "Estes parâmetros de configuração definem o comportamento em tempo de execução do processo do servidor S3 LuisML, de forma comparável ao comando mc admin config",
  "Where can I see current Heal status?":
    "Onde posso ver o status atual de recuperação?",
  "Check under Monitoring/Drives on the left hand  menu to see Drive and Bucket Healing status":
    "Consulte Monitoramento/Discos no menu à esquerda para ver o status de recuperação de discos e buckets",
  "How is Erasure Coding used to Protect Data?":
    "Como o erasure coding é usado para proteger dados?",
  "S3 LuisML erasure coding is a data redundancy and  availability feature that allows S3 LuisML deployments to  automatically reconstruct objects on-the-fly despite  the loss of multiple drives or nodes in the cluster.":
    "O erasure coding do S3 LuisML é um recurso de redundância e disponibilidade de dados que permite às implantações do S3 LuisML reconstruir objetos automaticamente, em tempo real, mesmo com a perda de vários discos ou nós do cluster.",
  "Recover After Hardware failure": "Recuperação após falha de hardware",
  "Depending on the deployment topology and  selected erasure code parity, S3 LuisML can tolerate loss  of up to half the drives or nodes in the deployment  while maintaining read access to objects.":
    "Dependendo da topologia da implantação e da paridade de erasure code escolhida, o S3 LuisML tolera a perda de até metade dos discos ou nós da implantação mantendo o acesso de leitura aos objetos.",
  "Site Failure Recovery": "Recuperação após falha de site",
  "S3 LuisML can make the loss of an entire site, while  significant, a relatively minor incident. Site recovery depends on the replication option you use for the site.":
    "O S3 LuisML pode transformar a perda de um site inteiro, embora significativa, em um incidente relativamente pequeno. A recuperação do site depende da opção de replicação usada nele.",
  "Node Failure Recovery": "Recuperação após falha de nó",
  "If a S3 LuisML node suffers complete hardware failure, the node begins healing operations once it rejoins the  deployment.":
    "Se um nó do S3 LuisML sofrer uma falha total de hardware, ele iniciará as operações de recuperação assim que voltar à implantação.",
  "What is S3 LuisML Healing?": "O que é a recuperação do S3 LuisML?",
  "Healing is S3 LuisML’s ability to restore data after some event causes data loss. Data loss can come from bit rot, drive loss, or node loss.":
    "A recuperação é a capacidade do S3 LuisML de restaurar dados depois de um evento que cause perda de dados. A perda pode vir de bit rot, perda de disco ou perda de nó.",
  "Understand S3 LuisML Healing Using mc":
    "Entenda a recuperação do S3 LuisML usando o mc",
  "The mc admin heal command scans for objects that are damaged or corrupted and heals those objects.":
    "O comando mc admin heal procura objetos danificados ou corrompidos e os recupera.",
  "What is Bit Rot?": "O que é bit rot?",
  "Bit rot is data corruption that occurs without the user’s knowledge. S3 LuisML combats bit rot with hashing and erasure coding.":
    "Bit rot é a corrupção de dados que ocorre sem o conhecimento do usuário. O S3 LuisML combate o bit rot com hashing e erasure coding.",
  "These configuration settings define runtime behavior of the S3 LuisML server process, comparable to the mc admin config command":
    "Estes parâmetros de configuração definem o comportamento em tempo de execução do processo do servidor S3 LuisML, de forma comparável ao comando mc admin config",
  "Overview of MinIO Erasure Coding": "Visão geral do erasure coding do MinIO",
  "Through this MinIO video you will learn about MinIO erasure coding, including erasure sets, erasure parity, and stripe size. You will also learn about how the Reed-Solomon algorithm can be optimized for storage efficiency (yielding cost savings) or data lost protection (number of servers and drives that can fail). The video also walks through the MinIO Erasure Code calculator, considerations for cluster design and the command line syntax needed to establish an erasure code deployment. ":
    "Neste vídeo do MinIO, você vai conhecer o erasure coding do MinIO, incluindo erasure sets, paridade e tamanho de stripe. Também vai ver como o algoritmo Reed-Solomon pode ser otimizado para eficiência de armazenamento (gerando economia) ou proteção contra perda de dados (número de servidores e discos que podem falhar). O vídeo ainda apresenta a calculadora de erasure code do MinIO, considerações sobre o projeto do cluster e a sintaxe de linha de comando necessária para criar uma implantação com erasure code. ",
  "Object Scanner": "Scanner de objetos",
  "Learn more about how the scanner checks Objects for transition and expiry based on lifecycle rules":
    "Saiba mais sobre como o scanner verifica objetos para transição e expiração com base nas regras de ciclo de vida",
  "What is the Scanner?": "O que é o scanner?",
  "One of several low-priority processes S3 LuisML runs to check lifecycle management rules, bucket or site replication status, as well as object bit rot and healing":
    "Um dos vários processos de baixa prioridade que o S3 LuisML executa para verificar regras de gerenciamento do ciclo de vida, o status de replicação de buckets ou sites, além de bit rot e recuperação de objetos",
  "Lifecycle Management Object Scanner Considerations":
    "Considerações sobre o scanner de objetos no gerenciamento do ciclo de vida",
  "S3 LuisML uses a scanner process to check objects against all configured lifecycle management rules. High IO workloads or limited system resources may delay application of lifecycle management rules":
    "O S3 LuisML usa um processo de scanner para comparar os objetos com todas as regras de gerenciamento do ciclo de vida configuradas. Cargas com muita E/S ou recursos limitados do sistema podem atrasar a aplicação dessas regras",
  "Lifecycle Management Lab": "Laboratório de gerenciamento do ciclo de vida",
  "Use the MinIO client to demonstrate expiration rules, the scanner, and transitioning objects to remote tiers.":
    "Use o cliente do MinIO para demonstrar regras de expiração, o scanner e a transição de objetos para camadas remotas.",
  "What is etcd?": "O que é o etcd?",
  "etcd is a strongly consistent, distributed key-value  store that provides a reliable way to store data that  needs to be accessed by a distributed system or  cluster of machines.":
    "O etcd é um armazenamento de chave-valor distribuído e fortemente consistente, que oferece uma forma confiável de guardar dados acessados por um sistema distribuído ou cluster de máquinas.",
  "What is the logger_webhook Environment Variable?":
    "O que é a variável de ambiente logger_webhook?",
  "The top-level configuration key for defining an  HTTP webhook target for publishing S3 LuisML logs.":
    "A chave de configuração de nível superior que define um destino de webhook HTTP para publicar os logs do S3 LuisML.",
  "Publish Server Logs to HTTP Webhook":
    "Publicar logs do servidor em um webhook HTTP",
  "You can configure a new HTTP webhook endpoint  to which S3 LuisML publishes S3 LuisML server logs using  either environment variables or by setting  runtime configuration settings.":
    "Você pode configurar um novo endpoint de webhook HTTP para o S3 LuisML publicar os logs do servidor, usando variáveis de ambiente ou parâmetros de configuração em tempo de execução.",
  "Monitoring Logs": "Monitoramento de logs",
  "S3 LuisML supports publishing server logs  and audit logs to an HTTP webhook.":
    "O S3 LuisML pode publicar logs do servidor e logs de auditoria em um webhook HTTP.",
  "Monitoring with Prometheus": "Monitoramento com Prometheus",
  "Learn about the monitoring features available  in your MinIO Console and how to export to  Prometheus and get information back so you can  view it in detail.":
    "Conheça os recursos de monitoramento do Console do MinIO e como exportar dados para o Prometheus e obter informações de volta para vê-las em detalhes.",
  "Prometheus Monitoring Lab": "Laboratório de monitoramento com Prometheus",
  "Learn how to set up Prometheus and connect it  back to your MinIO cluster so that you can get  detailed history of what's going on in your MinIO  cluster at any given time.":
    "Aprenda a configurar o Prometheus e conectá-lo ao seu cluster MinIO para ter um histórico detalhado do que acontece no cluster a qualquer momento.",
  "Publish Audit Logs to an HTTP webhook":
    "Publicar logs de auditoria em um webhook HTTP",
  "You can configure a new HTTP webhook endpoint  to which S3 LuisML publishes audit logs using either  environment variables or by setting runtime  configuration settings":
    "Você pode configurar um novo endpoint de webhook HTTP para o S3 LuisML publicar os logs de auditoria, usando variáveis de ambiente ou parâmetros de configuração em tempo de execução",
  "Publish Audit Logs to an External Service":
    "Publicar logs de auditoria em um serviço externo",
  "Audit logs are granular descriptions of each operation  on the S3 LuisML deployment supporting security  standards and regulations which require  detailed tracking of operations.":
    "Os logs de auditoria são descrições detalhadas de cada operação na implantação do S3 LuisML, atendendo a normas e regulamentos de segurança que exigem rastreamento detalhado das operações.",
  "Publish Events to Kafka": "Publicar eventos no Kafka",
  "S3 LuisML supports publishing bucket notification events to a Kafka service endpoint.":
    "O S3 LuisML pode publicar eventos de notificação de bucket em um endpoint de serviço Kafka.",
  "Kafka Service for Bucket Notifications":
    "Serviço Kafka para notificações de bucket",
  "Learn about environment variables for configuring a Kafka service as a target for Bucket Nofitications.":
    "Conheça as variáveis de ambiente para configurar um serviço Kafka como destino de notificações de bucket.",
  "Kafka Service Configuration Settings":
    "Parâmetros de configuração do serviço Kafka",
  "Supported Bucket Notification Targets":
    "Destinos de notificação de bucket compatíveis",
  "Learn which notification targets are supported by S3 LuisML.":
    "Saiba quais destinos de notificação o S3 LuisML aceita.",
  "Bucket Notifications": "Notificações de bucket",
  "S3 LuisML bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events.":
    "As notificações de bucket do S3 LuisML permitem que administradores enviem notificações a serviços externos compatíveis quando ocorrem determinados eventos de objeto ou de bucket.",
  "Need more help? Check out additional Troubleshooting options":
    "Precisa de mais ajuda? Veja outras opções de solução de problemas",
  "Site Replication Prerequisite": "Pré-requisitos da replicação entre sites",
  "Check that your setup meets the requirements to deploy Site Replication":
    "Verifique se o seu ambiente atende aos requisitos para implantar a replicação entre sites",
  "Site replication configures multiple independent S3 LuisML deployments as a cluster of replicas called peer sites.":
    "A replicação entre sites configura várias implantações independentes do S3 LuisML como um cluster de réplicas chamadas sites pares.",
  "Site Replication Overview": "Visão geral da replicação entre sites",
  "See what changes are and are NOT replicated between peer sites":
    "Veja o que é e o que NÃO é replicado entre sites pares",
  "Site Replication Tutorial": "Tutorial de replicação entre sites",
  "Learn how to set up site replication using Console and the S3 LuisML client (mc)":
    "Saiba como configurar a replicação entre sites usando o Console e o cliente do S3 LuisML (mc)",
  "Transition from S3 LuisML to Azure": "Transição do S3 LuisML para o Azure",
  "See the procedure to create a new object lifecycle management rule that transition objects from a S3 LuisML bucket to a remote storage tier on the Azure storage backend.":
    "Veja o procedimento para criar uma nova regra de gerenciamento do ciclo de vida de objetos que faz a transição de objetos de um bucket do S3 LuisML para uma camada de armazenamento remota no backend de armazenamento Azure.",
  "Transition from S3 LuisML to GCS": "Transição do S3 LuisML para o GCS",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Google Cloud Storage backend.":
    "Veja o procedimento para criar uma nova regra de gerenciamento do ciclo de vida de objetos que faz a transição de objetos de um bucket do S3 LuisML para uma camada de armazenamento remota no backend Google Cloud Storage.",
  "Transition from S3 LuisML to S3": "Transição do S3 LuisML para o S3",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Amazon Web Services S3 storage backend or an S3-compatible service.":
    "Veja o procedimento para criar uma nova regra de gerenciamento do ciclo de vida de objetos que faz a transição de objetos de um bucket do S3 LuisML para uma camada de armazenamento remota no backend Amazon Web Services S3 ou em um serviço compatível com S3.",
  "Transition to Remote S3 LuisML Deployment":
    "Transição para uma implantação remota do S3 LuisML",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a bucket on a primary S3 LuisML deployment to a bucket on a remote S3 LuisML deployment. ":
    "Veja o procedimento para criar uma nova regra de gerenciamento do ciclo de vida de objetos que faz a transição de objetos de um bucket em uma implantação primária do S3 LuisML para um bucket em uma implantação remota do S3 LuisML. ",
  "Object Lifecycle Management": "Gerenciamento do ciclo de vida de objetos",
  "Use S3 LuisML Object Lifecycle Management to create rules for time or date based automatic transition or expiry of objects.":
    "Use o gerenciamento do ciclo de vida de objetos do S3 LuisML para criar regras de transição ou expiração automática de objetos com base em tempo ou data.",
  "MinIO Feature Overview: Object Lifecycle Management":
    "Visão geral dos recursos do MinIO: gerenciamento do ciclo de vida de objetos",
  "Learn about MinIO's object lifecycle management capabilities.":
    "Conheça os recursos de gerenciamento do ciclo de vida de objetos do MinIO.",
  "Lifecycle Management I - Tiers":
    "Gerenciamento do ciclo de vida I – Camadas",
  "In this video we will cover expiration and transition of objects to an alternate tier of storage.":
    "Neste vídeo, vamos abordar a expiração e a transição de objetos para uma camada alternativa de armazenamento.",
  Tiers: "Camadas",
  "See the procedure to create a new object lifecycle management rule that transitions objects from a S3 LuisML bucket to a remote storage tier on the Azure storage backend.":
    "Veja o procedimento para criar uma nova regra de gerenciamento do ciclo de vida de objetos que faz a transição de objetos de um bucket do S3 LuisML para uma camada de armazenamento remota no backend de armazenamento Azure.",
  "Console Metrics Dashboard": "Painel de métricas do Console",
  "The S3 LuisML Console provides a point-in-time metrics dashboard by default, and also supports displaying time-series and historical data by querying a Prometheus service configured to scrape data from the S3 LuisML deployment.":
    "O Console do S3 LuisML oferece por padrão um painel de métricas pontuais e também exibe séries temporais e dados históricos ao consultar um serviço Prometheus configurado para coletar dados da implantação do S3 LuisML.",
  "Available Metrics": "Métricas disponíveis",
  "Learn about the different Prometheus metrics published by S3 LuisML server":
    "Conheça as diferentes métricas do Prometheus publicadas pelo servidor S3 LuisML",
  "Metrics and Alerts": "Métricas e alertas",
  "For historical metrics and analytics, S3 LuisML publishes cluster and node metrics using the Prometheus Data Model.":
    "Para métricas históricas e análises, o S3 LuisML publica métricas de cluster e de nó usando o modelo de dados do Prometheus.",
  "Learn about the monitoring features available  in your MinIO Console.":
    "Conheça os recursos de monitoramento do Console do MinIO.",
  "User Management": "Gerenciamento de usuários",
  "Each user can have one or more assigned policies that explicitly list the actions and resources to which that user has access. Users can also inherit policies from the groups in which they have membership.":
    "Cada usuário pode ter uma ou mais políticas atribuídas que listam explicitamente as ações e os recursos a que ele tem acesso. Os usuários também podem herdar políticas dos grupos dos quais são membros.",
  "Group Management": "Gerenciamento de grupos",
  "A group is a collection of users. Each group can have one or more assigned policies that explicitly list the actions and resources to which group members are allowed or denied access.":
    "Um grupo é um conjunto de usuários. Cada grupo pode ter uma ou mais políticas atribuídas que listam explicitamente as ações e os recursos a que os membros têm acesso permitido ou negado.",
  "MinIO Identity and Access Management: Part 3 - Interfacing with OpenID and LDAP":
    "Gerenciamento de identidade e acesso do MinIO: parte 3 – Integração com OpenID e LDAP",
  "This video is focused on interfacing with OpenID and LDAP to manage access to MinIO.":
    "Este vídeo trata da integração com OpenID e LDAP para gerenciar o acesso ao MinIO.",
  "MinIO Authentication and Authorization Using OpenID and Keycloak":
    "Autenticação e autorização no MinIO com OpenID e Keycloak",
  "In this video you will learn how to set up an OpenID service, Keycloak, to provide authentication and authorization as part of a MinIO deployment.":
    "Neste vídeo, você vai aprender a configurar um serviço OpenID, o Keycloak, para oferecer autenticação e autorização em uma implantação do MinIO.",
  "Drive Healing": "Recuperação de discos",
  "The Drives section displays the healing status for a bucket.":
    "A seção Discos exibe o status de recuperação de um bucket.",
  "Erasure Coding": "Erasure coding",
  "S3 LuisML Erasure Coding is a data redundancy and availability feature that allows S3 LuisML deployments to automatically reconstruct objects on-the-fly despite the loss of multiple drives or nodes in the cluster.":
    "O erasure coding do S3 LuisML é um recurso de redundância e disponibilidade de dados que permite às implantações do S3 LuisML reconstruir objetos automaticamente, em tempo real, mesmo com a perda de vários discos ou nós do cluster.",
  "Site Healing": "Recuperação de sites",
  "Any S3 LuisML deployment in the site replication configuration can resynchronize damaged replica-eligible data from the peer with the most updated (“latest”) version of that data.":
    "Qualquer implantação do S3 LuisML na configuração de replicação entre sites pode ressincronizar dados danificados elegíveis para réplica a partir do par com a versão mais atual (“latest”) desses dados.",
  Healing: "Recuperação",
  "S3 LuisML Automatically Heals Corrupt or Missing Data On-the-fly":
    "O S3 LuisML recupera automaticamente dados corrompidos ou ausentes em tempo real",
  "In this video, we will provide an overview of site-wide replication.":
    "Neste vídeo, vamos apresentar uma visão geral da replicação em todo o site.",
  Health: "Integridade",
  "The health section provides an interface for running a health diagnostic for the S3 LuisML Deployment. The report is generated on the deployment and downloaded directly to your browser.":
    "A seção de integridade oferece uma interface para executar um diagnóstico de integridade da implantação do S3 LuisML. O relatório é gerado na implantação e baixado diretamente no seu navegador.",
  "IDP Docs": "Documentação de IDP",
  "S3 LuisML supports multiple external identity managers through OpenID Connect-Compatible Active Directory / LDAP":
    "O S3 LuisML aceita vários gerenciadores de identidade externos por meio de OpenID Connect e Active Directory / LDAP",
  "Built-in S3 LuisML IDP": "IDP embutido do S3 LuisML",
  "S3 LuisML includes a built-in IDentity Provider (IDP) that provides core identity management functionality.":
    "O S3 LuisML inclui um provedor de identidade (IDP) embutido que oferece as funções essenciais de gerenciamento de identidade.",
  "Active Directory / LDAP Access Management":
    "Gerenciamento de acesso com Active Directory / LDAP",
  "For identities managed by the external AD/LDAP provider, S3 LuisML uses the user’s Distinguished Name and attempts to map it against an existing policy.":
    "Para identidades gerenciadas pelo provedor AD/LDAP externo, o S3 LuisML usa o Distinguished Name do usuário e tenta associá-lo a uma política existente.",
  "Keycloak configuration": "Configuração do Keycloak",
  "You can configure S3 LuisML to use Keycloak as an external IDentity Provider (IDP) for authentication of users via the OpenID Connect (OIDC) protocol.":
    "Você pode configurar o S3 LuisML para usar o Keycloak como provedor de identidade (IDP) externo na autenticação de usuários pelo protocolo OpenID Connect (OIDC).",
  "LDAP Configuration": "Configuração LDAP",
  "S3 LuisML supports configuring a single Active Directory / LDAP Connect for external management of user identities.":
    "O S3 LuisML permite configurar uma única conexão Active Directory / LDAP para o gerenciamento externo de identidades de usuários.",
  "OIDC Configuration": "Configuração OIDC",
  "S3 LuisML supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.":
    "O S3 LuisML aceita um provedor de identidade (IDP) compatível com OpenID Connect (OIDC), como Okta, Keycloak, Dex, Google ou Facebook, para o gerenciamento externo de identidades de usuários.",
  "KMS overview": "Visão geral do KMS",
  "MinIO's cryptographic expert shares why MinIO built KES, what it is used for and how it fits into the MinIO architecture.":
    "O especialista em criptografia do MinIO explica por que o MinIO criou o KES, para que ele serve e como se encaixa na arquitetura do MinIO.",
  "Learn about key management using KMS.":
    "Saiba mais sobre gerenciamento de chaves com KMS.",
  "Text snippet that will be relevant to the user will  go here  made to look nice in the helpitem size  on two-three lines":
    "Um trecho de texto relevante para o usuário vai aqui, ajustado para ficar bonito no tamanho do item de ajuda em duas ou três linhas",
  "Error logs can be filtered by node and log type, as well as search for specific text in the logs.":
    "Os logs de erro podem ser filtrados por nó e tipo de log, e é possível procurar texto específico neles.",
  "Audit Logs": "Logs de auditoria",
  "You can configure an HTTP webhook endpoint to which S3 LuisML publishes audit logs using either environment variables or by setting runtime configuration settings.":
    "Você pode configurar um endpoint de webhook HTTP para o S3 LuisML publicar os logs de auditoria, usando variáveis de ambiente ou parâmetros de configuração em tempo de execução.",
  "Object Lambda": "Object Lambda",
  "S3 LuisML’s Object Lambda enables developers to programmatically transform objects on demand.":
    "O Object Lambda do S3 LuisML permite que desenvolvedores transformem objetos sob demanda por meio de programação.",
  "MinIO Event Notifications - Overview":
    "Notificações de eventos do MinIO: visão geral",
  "Use the Event framework to see what's going on in the system using Bucket, Object, Replication and ILM events.":
    "Use o framework de eventos para ver o que acontece no sistema por meio de eventos de bucket, objeto, replicação e ILM.",
  "Managing Event Notifications Using MinIO MC Commands":
    "Gerenciamento de notificações de eventos com comandos mc do MinIO",
  "This video provides an overview of the types of event notifications and how to set them up using MinIO's mc commands.":
    "Este vídeo apresenta uma visão geral dos tipos de notificação de eventos e de como configurá-los com os comandos mc do MinIO.",
  "MinIO Events Notifications - Setting Up Webhooks Using Python":
    "Notificações de eventos do MinIO: configuração de webhooks com Python",
  "This video provides an overview of how to use Python and Flask to set up a Webhook on MinIO. ":
    "Este vídeo mostra como usar Python e Flask para configurar um webhook no MinIO. ",
  "MinIO Event Notifications - Using The MinIO Python SDK to Write Custom Webhooks":
    "Notificações de eventos do MinIO: uso do SDK Python do MinIO para criar webhooks personalizados",
  "This video dives deeper into using the MinIO Python SDK to setup and manage notifications.":
    "Este vídeo aprofunda o uso do SDK Python do MinIO para configurar e gerenciar notificações.",
  "Object Management": "Gerenciamento de objetos",
  "Learn about Objects and how  S3 LuisML allows you to manage them":
    "Conheça os objetos e como o S3 LuisML permite gerenciá-los",
  "Managing Objects with the Object Browser":
    "Gerenciamento de objetos com o navegador de objetos",
  "Learn how to use the Console Object Browser  to manage your Objects":
    "Saiba como usar o navegador de objetos do Console para gerenciar seus objetos",
  "Manipulating Objects": "Manipulação de objetos",
  "A demo of Prefixes & Objects with examples of copying and deleting an object, as well as CopySource Object.":
    "Uma demonstração de prefixos e objetos, com exemplos de cópia e exclusão de um objeto e de CopySource Object.",
  "Example Policy - Bucket Resource Access":
    "Exemplo de política: acesso a recursos de bucket",
  "An example policy demonstrating authorization  limited to a named bucket":
    "Um exemplo de política que demonstra autorização limitada a um bucket específico",
  Performance: "Desempenho",
  "The performance section provides an interface for running a performance test of the deployment.":
    "A seção de desempenho oferece uma interface para executar um teste de desempenho da implantação.",
  Profile: "Perfil",
  "The profile section provides an interface for running system profiling of the deployment. The results can provide insight into the S3 LuisML server process running on a given node.":
    "A seção de perfil de execução oferece uma interface para executar o perfil do sistema da implantação. Os resultados dão uma visão do processo do servidor S3 LuisML em execução em determinado nó.",
  Inspect: "Inspecionar",
  "The inspect section provides an interface for capturing the erasure-coded metadata associated to an object or objects.":
    "A seção de inspeção oferece uma interface para capturar os metadados com erasure coding associados a um ou mais objetos.",
  "Encrypt Inspect Output": "Criptografar saída da inspeção",
  "You can encrypt the output of the mc support inspect command for enhanced security when transferring the files off the deployment.":
    "Você pode criptografar a saída do comando mc support inspect para aumentar a segurança ao transferir os arquivos para fora da implantação.",
  "What is Trace?": "O que é o rastreamento?",
  "The trace section provides HTTP trace functionality for a bucket or buckets on the deployment.":
    "A seção de rastreamento oferece a funcionalidade de rastreamento HTTP para um ou mais buckets da implantação.",
  Users: "Usuários",
  "What is Watch?": "O que é o Monitor (Watch)?",
  "The Watch section displays S3 events as they occur on the selected bucket.":
    "A seção Monitor exibe os eventos S3 à medida que ocorrem no bucket selecionado.",
  "Access Managemnt": "Gerenciamento de acesso",
  "Object Locking": "Bloqueio de objetos",
  "S3 LuisML Object Locking (“Object Retention”) enforces Write-Once Read-Many (WORM) immutability to protect versioned objects from deletion.":
    "O bloqueio de objetos do S3 LuisML (“retenção de objetos”) impõe imutabilidade WORM (Write-Once Read-Many) para proteger objetos versionados contra exclusão.",
  Encryption: "Criptografia",
  "S3 LuisML Server-Side Encryption (SSE) protects objects as part of write operations, allowing clients to take advantage of server processing power to secure objects at the storage layer (encryption-at-rest).":
    "A criptografia do lado do servidor (SSE) do S3 LuisML protege os objetos durante as operações de escrita, permitindo que os clientes aproveitem o poder de processamento do servidor para proteger objetos na camada de armazenamento (criptografia em repouso).",
  "Learn how to use Console to manage Buckets":
    "Saiba como usar o Console para gerenciar buckets",
  "Bucket Replication": "Replicação de bucket",
  "S3 LuisML server-side bucket replication is an automatic bucket-level configuration that synchronizes objects between a source and destination bucket.":
    "A replicação de bucket do lado do servidor do S3 LuisML é uma configuração automática em nível de bucket que sincroniza objetos entre um bucket de origem e um de destino.",
  "This video gives an overview of how to set up and use object versioning as part of a data lifecycle management strategy.":
    "Este vídeo apresenta uma visão geral de como configurar e usar o versionamento de objetos em uma estratégia de gerenciamento do ciclo de vida dos dados.",
  "Versioning Lab": "Laboratório de versionamento",
  "This demo will take you through the steps to manage versioned objects using the MinIO command line tools.":
    "Esta demonstração mostra os passos para gerenciar objetos versionados com as ferramentas de linha de comando do MinIO.",
  "Bucket Replication Requirements": "Requisitos da replicação de bucket",
  "Check here to ensure you meet the prerequisites before setting up any replication configurations.":
    "Confira aqui se você atende aos pré-requisitos antes de definir qualquer configuração de replicação.",
  "Bucket Replication Overview": "Visão geral da replicação de bucket",
  "In this video, we will cover bucket level replication, both active-passive and active-active.":
    "Neste vídeo, vamos abordar a replicação em nível de bucket, tanto ativo-passivo quanto ativo-ativo.",
  "Replication Lab I": "Laboratório de replicação I",
  "Demonstrates bucket replication concepts using MinIO Client, including active-passive and active-active replication.":
    "Demonstra conceitos de replicação de bucket com o cliente do MinIO, incluindo replicação ativo-passivo e ativo-ativo.",
  "Replication Lab II": "Laboratório de replicação II",
  "Demonstrates site replication concepts using MinIO Client, including active-passive and active-active replication.":
    "Demonstra conceitos de replicação entre sites com o cliente do MinIO, incluindo replicação ativo-passivo e ativo-ativo.",
  "Access Management": "Gerenciamento de acesso",
  "Logging in": "Como entrar",
  "Sign in with the root credentials, an IAM user access key, or temporary STS credentials via Other Authentication Methods.":
    "Entre com as credenciais root, uma chave de acesso de usuário IAM ou credenciais STS temporárias em Outros métodos de autenticação.",
  "Console configuration": "Configuração do Console",
  "Configure identity providers, TLS, and session settings for the console on the server side.":
    "Configure provedores de identidade, TLS e parâmetros de sessão do Console no lado do servidor.",
  "Replication Internals": "Funcionamento interno da replicação",
  "Learn details of the S3 LuisML replication process.":
    "Conheça os detalhes do processo de replicação do S3 LuisML.",
  "One-way Bucket Replication": "Replicação de bucket unidirecional",
  "Guidance on configuring one-way Bucket replication using S3 LuisML Console.":
    "Orientações para configurar a replicação de bucket unidirecional no Console do S3 LuisML.",
  "Two-way Bucket Replication": "Replicação de bucket bidirecional",
  "Guidance on configuring two-way (active-active) Bucket replication using S3 LuisML Console.":
    "Orientações para configurar a replicação de bucket bidirecional (ativo-ativo) no Console do S3 LuisML.",
};

export default ptHelp;
