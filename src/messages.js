export default {
    en:{
        'male':'Male gender',
        'male.description':'No Description',

        'glycemia':'Blood glucose on admission (mg/dL)', 
        'glycemia.description':'The first measured capillary blood glucose on admission', 

        'aspects':'ASPECTS on admission (CT Scan)', 
        'aspects.description':'ASPECTS measured by the first brain CT Scan on admission Non-evident lesions should be considered as ASPECTS 10', 

        'acm':'Hyperdense MCA sign',
        'acm.description':'No Description',

        'microangiopathy':'Leukoaraiosis', 
        'microangiopathy.description':'FAZEKAS grade (Fazekas, 1987) 1-6 wasconsidered as leukoaraiosis', 

        'lacunar_syndrome':'Lacunar syndrome', 
        'lacunar_syndrome.description':'Defined based on The Oxfordshire Community Stroke Project classification system (Bamford, 1991): pure motor OR pure sensory OR sensorimotor symptoms OR ataxic hemiparesis OR clumsy-hand dysarthria', 

        'aortic_insufficiency':'Cardio-aortic embolism',
        'aortic_insufficiency.description':`We attested the stroke mechanism Cardio-aortic embolism from SSS-TOAST, an evidence-based system. In our score, we considered all the levels of evidence described in the system. <br/><br/>
            <b>The presence of a high-risk cardiac source of cerebral embolism (Evident level of confidence):</b><br/><br/>
            Sources of embolism of thrombotic origin <br/>
            1. Left atrial thrombus <br/>
            2. Left ventricular thrombus <br/>
            3. Atrial fibrillation <br/>
            4. Paroxysmal atrial fibrillation <br/>
            5. Sick sinus syndrome <br/>
            6. Sustained atrial flutter <br/>
            7. Recent myocardial infarction (within 1 month) <br/>
            8. Rheumatoid mitral or aortic valve disease <br/>
            9. Bioprosthetic and mechanical heart valves <br/>
            10. Chronic myocardial infarction together with low ejection fraction less than 28% <br/>
            11. Symptomatic congestive heart failure with ejection fraction less than 30% <br/>
            12. Dilated cardiomyopathy <br/>
            13. Nonbacterial thrombotic endocarditis <br/><br/>
            Sources with embolism not predominantly of thrombotic origin <br/><br/>
            14. Infective endocarditis <br/>
            15. Papillary fibroelastoma <br/>
            16. Left atrial myxoma <br/><br/>
            <b>Evidence of systemic embolism or presence of multiple acute infarctions that have occurred closely related in time within both right and left anterior or both anterior and posterior circulations in the absence of occlusion or near-occlusive stenosis of all relevant vessels; other diseases that can cause multifocal ischemic brain injury such as vasculitis, vasculopathies, and hemostatic or hemodynamic disturbances must not be present (Probable level of confidence)</b> <br/><br/>
            <b>The presence of a cardiac condition with low or uncertain primary risk of cerebral embolism (see below) or Evidence for evident cardioaortic embolism in the absence of complete diagnostic investigation for other mechanisms (Possible level of confidence)</b> <br/><br/>
            <i> Sources with low or uncertain primary risk for ischemic stroke </i><br/><br/>
            17. Mitral annular calcification <br/>
            18. Patent foramen ovale <br/>
            19. Atrial septal aneurysm <br/>
            20. Atrial septal aneurysm and patent foramen ovale <br/>
            21. Left ventricular aneurysm without thrombus <br/>
            22. Isolated left atrial smoke (no mitral stenosis or atrial fibrillation) <br/>
            23. Complex atheroma in the ascending aorta or proximal arch`, 

        'result': 'Result',
        'result.warning': 'Given some missing data, the likelihood may be misestimated',
        'result.alert':` <b>Alert - The Score is greater than or equal to 3 <br/><br/>
                                Increased chance of Hemorrhagic Transformation (HT) within 7 days </b> <br/><br/>
                                Sensibility: 73.7 (63.6-82.2)% <br/> 
                                Specificity 76.5 (71.7-80.8)% <br/>
                                Sensibility  (symptomatic cases of HT): 77 (62.2-88.5)% <br/>
                                Specificity (symptomatic cases of HT): 76.7 (72-81)% <br/>
                                OR (General HT): 9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>
                                OR (Symptomatic HT): 11.2 (95% CI, 5.30-23.6, p &lt; 0.001) <br/>
                                `,
        'total': 'Total',
        'odd': 'Odd ratio',
        'likelihood': 'Probability of hemorrhagic transformation (%)',
        'evaluate':'Evaluate',
        'not_available':'Not Available',
    },
    pt:{
        'male':'Sexo Masculino',
        'male.description':'Sem descrição',

        'glycemia':'Glicemia na admissão (mg/dL)',
        'glycemia.description':'A primeira aferição de glicemia capilar na admissão hospitalar ',

        'aspects':'ASPECTS admissional',
        'aspects.description':'Aferido pela primeira tomografia computadorizada de encéfalo na admissão hospitalar. Ausência de hipodensidade deve ter score de 10',
        
        'acm':'Sinal da ACM hiperdensa',
        'acm.description':'Sem descrição',

        'microangiopathy':'Microangiopatia',
        'microangiopathy.description':'Graus 1 a 6 na classificação de Fazekas (Fazekas, 1987) foram consideradas como presença de microangiopatia ',

        'lacunar_syndrome':'Síndrome Lacunar',
        'lacunar_syndrome.description':'Definida de acordo com o The Oxfordshire Community Stroke Project classification system (Bamford, 1991): sintoma motor puro OU sensitivo puro OU sensitivo-motor OU hemiparesia atáxica OU disartria clumsy-hand ',

        'aortic_insufficiency':'Etiologia Cárdio-aórtica',
        'aortic_insufficiency.description':`Foi classificado como mecanismo etiológico cardio-aórtico segundo os critérios propostos no sistema de classificação SSS-TOAST. Todos os níveis de confiança foram considerados. <br/><br/>
            <b>Presença de uma fonte de embolia cerebral de alto risco (Nível Evidente) </b> <br/><br/>
            1. Trombo no átrio esquerdo <br/>
            2. Trombo no ventrículo esquerdo <br/>
            3. Fibrilação atrial <br/>
            4. Fibrilação atrial paroxística <br/>
            5. Síndrome do nó sinusal <br/>
            6. Flutter atrial sustentado <br/>
            7. Infarto do miocárdio recente (dentro de 1 mês) <br/>
            8. Doença reumática nas valva mitral ou aórtica <br/>
            9. Valva biológica ou mecânica <br/>
            10. Infarto crônico do miocárdio com fração de ejeção inferior a 28% <br/>
            11. Insuficiência cardíaca sintomática com fração de ejeção inferior a 30% <br/>
            12. Cardiomiopatia dilatada <br/>
            13. Endocardite trombótica não infecciosa <br/><br/>
            <i>Fonte de origem não predominantemente trombótica </i> <br/>
            14. Endocardite infeciosa <br/>
            15. Fibroelastoma papilar <br/>
            16. Mixoma atrial esquerdo <br/><br/>
            <b>Evidência de embolia sistêmica ou presença de múltiplos infartos agudos que ocorreram quase ao mesmo tempo bilateralmente na circulação anterior ou posterior, na ausência de oclusão ou estenose crítica em todos os vasos relevantes; outras condições que causem isquemia multifocal como vasculite, vasculopatias e distúrbios de coagulação ou hemodinâmicos devem não estar presentes. (Nível Provável) </b> </br> </br>
            <b>A presença de uma condição cardíaca com baixo ou incerto risco primário de embolia cerebral (veja abaixo) ou evidência de evidente embolia cardioaórtica na ausência de investigação diagnóstica completa para outros mecanismos. (Nível Possível)</b> </br></br>
            <i>Fontes com baixo ou incerto risco primário para AVC isquêmico </i> </br></br>
            17. Calcificação do anel mitral </br>
            18. Forame oval patente </br>
            19. Aneurisma de septo atrial </br>
            20. Aneurisma de septo atrial com forame oval patente </br>
            21. Aneurisma de ventrículo esquerdo sem trombo </br>
            22. Sombra isolada no átrio esquerdo (sem estenose mitral ou fibrilação atrial) </br>
            23. Ateroma complexo na aorta ascendente ou arco proximal `,

        'result': 'Resultado',
        'result.warning': 'Considerando dado omisso, a probabilidade por estar subestimada',
        'result.alert':` <b>Alerta: Pontuação Total maior que 3 <br/><br/>
                                Alta chance de transformação hemorrágica em 7 dias </b> <br/><br/>
                                Sensibilidade: 73.7 (63.6-82.2)% <br/> 
                                Especificidade 76.5 (71.7-80.8)% <br/>
                                Sensibilidade para TH Sintomática: 77 (62.2-88.5)% <br/>
                                Especificidade para TH Sintomática: 76.7 (72-81)% <br/>
                                OR para TH Geral: 9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>
                                OR para TH sintomática: 11.2 (95% CI, 5.30-23.6, p &lt; 0.001) <br/>
                                `,
        'total': 'Total',
        'odd': 'Odd ratio',
        'likelihood': 'Probabilidade de Transformação Hemorrágica (%)',
        'evaluate':'Avaliar',
        'not_available':'Não disponível',
    },
    es:{
        'male':'Sexo Masculino',
        'male.description':'Sin descripción',

        'glycemia':'Glicemia al ingreso (mg/dL)',
        'glycemia.description':'La primera glucosa capilar en sangre medida al ingresso',

        'aspects':'ASPECTS al ingresso',
        'aspects.description':'Medido por la primera tomografía computarizada cerebral al ingreso. Lesiones no evidentes se deben considerar como “ASPECTS 10”',

        'acm':'Sinal de ACM hiperdensa',
        'acm.description':'Sin descripción',

        'microangiopathy':'Leucoaraiosis',
        'microangiopathy.description':'Los grados 1 a 6 en la clasificación de Fazekas (Fazekas, 1987) fueron considerados como presencia de microangiopatia',

        'lacunar_syndrome':'Síndrome lacunar',
        'lacunar_syndrome.description':'Definido según el “The Oxfordshire Community Stroke Project classification system” (Bamford, 1991): síntomas puramente motores O sensoriales O sensoriomotores puros O hemiparesia atáxica O disartria “clumsy-hand”.',

        'aortic_insufficiency':'Embolismo cardio-aórtico',
        'aortic_insufficiency.description':`
                Hemos evaluado el mecanismo cardioembólico de accidente cerebrovascular a partir de la clasificación basada en evidencia SSS-TOAST. En nuestra puntuación, consideramos todos los niveles de evidencia descritos en la clasificación. <br/><br/>
                <b>Presencia de embolismo cerebral de fuente cardíaca de alto riesgo (Nivel de confianza evidente):</b> <br/><br/>
                <i>Fuentes de embolismo de origen trombótico </i> <br/><br/>
                1.     Trombo de aurícula izquierda <br/>
                2.     Trombo de ventrículo izquierdo <br/>
                3.     Fibrilación auricular <br/>
                4.     Fibrilación auricular paroxística <br/>
                5.     Síndrome del seno enfermo <br/>
                6.     Flutter auricular sostenido <br/>
                7.     Infarto agudo de miocardio reciente (Dentro de un mes) <br/>
                8.     Enfermedad valvular reumática mitral o aórtica <br/>
                9.     Presencia de válvulas cardíacas mecánicas o bioprotésicas <br/>
                10.  Infarto agudo de miocardio crónico asociado a fracción de eyección reducida menor del 28% <br/>
                11.  Insuficiencia cardíaca congestiva sintomática con fracción de eyección menor del 30% <br/>
                12.  Miocardiopatía dilatada <br/>
                13.  Endocarditis trombótica no bacteriana  <br/><br/>
                <i>Fuentes de embolismo sin origen trombótico predominante</i> <br/> <br/>
                14.  Endocarditis infecciosa <br/>
                15.  Fibroelastoma papilar <br/>
                16.  Mixoma de aurícula izquierda  <br/><br/>
                <b>Evidencia de embolismo sistémico o presencia de múltiples infartos agudos que ocurrieron estrechamente relacionados en tiempo en territorios de circulación anterior bilateral o en circulación anterior y posterior simultáneamente; en ausencia de: oclusión o estenosis crítica de vasos relacionados topográficamente, otras enfermedades que pueden causar lesiones isquémicas multifocales como: vasculitis, vasculopatías o alteraciones hemostáticas o hemodinámicas. (Nivel de confianza probable) </b><br/><br/>
                <b>La presencia de uma condición cardíaca con riesgo primario  bajo o incierto para embolismo cerebral (ver abajo) o evidencia de embolismo cardioaórtico evidente en ausencia de investigación etiológica completa para otros mecanismos. (Nivel de confianza posible) </b> <br/><br/>
                <i>Fuentes de riesgo primario bajo o incierto para accidente cerebrovascular isquémico </i> <br/><br/>
                17.  Calcificación anular mitral <br/>
                18.  Foramen ovale permeable <br/>
                19.  Aneurisma de septum auricular <br/>
                20.   Aneurisma de septum auricular y foramen ovale permeable <br/>
                21.  Aneruisma ventricular izquierdo sin trombo intracavitario <br/>
                22.  Contraste ecocardiográfico espontáneo auricular izquierdo aislado (sin estenosis mitral ni fibrilación auricular) <br/>
                23.  Ateroma complicado en la aorta ascendente o en el arco aórtico proximal <br/>
        `,

        'result': 'Resultado',
        'result.warning': 'Dados algunos datos faltantes, el resultado puede ser subestimado',
        'result.alert': `
                <b>Alerta: La puntuación es mayor o igual a 3 </b> <br/><br/>
                <b>Alta probabilidad de transformación hemorrágica (TH) en 7 días </b> <br/><br/>
                Sensibilidad: 73.7 (63.6-82.2)% <br/>
                Especificidad: 76.5 (71.7-80.8)% <br/>
                
                Sensibilidad (los casos de TH sintomática): 77 (62.2-88.5)% <br/>
                Especificidad (los casos de TH sintomática): 76.7 (72-81)% <br/>
                OR (General TH):9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>
                OR (TH sintomática): 11.2 (95% CI, 5.30-23.6, p &lt; 0.001)`,
        'total': 'Total',
        'odd': 'Odd ratio',
        'likelihood': 'Probabilidad de transformación hemorrágica (%)',
        'evaluate':'Evaluar',
        'not_available':'No disponible',
    }
}