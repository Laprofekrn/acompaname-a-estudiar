const surveys = [
  [
    {
      id: "cuidador_1_1",
      meaning: "",
      actor: "cuidador_1",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante aprenda más y mejor",
        ],
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
      },
    },
    {
      id: "cuidador_1_2",
      meaning: "",
      actor: "cuidador_1",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que está más motivado para acompañar academicamente al estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_3",
      meaning: "",
      actor: "cuidador_1",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que su falta de formación académica le ha impedido involucrarse más en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_4",
      meaning: "",
      actor: "cuidador_1",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que explicarle y permitir que el estudiante resuelva las tareas por sí mismo es una acción efectiva para apoyar el aprendizaje",
        ],
        "compromiso académico": [
          "El cuidador considera que conocer el estilo de aprendizaje del estudiante es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_1_5",
      meaning: "",
      actor: "cuidador_1",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que hay más seguridad en el estudiante",
        ],
        "compromiso académico": [
          "El cuidador considera que acompaña más al estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_6",
      meaning: "",
      actor: "cuidador_1",
      reactive: "6",
      question:
        "¿Qué aspectos del proyecto de intervención le resultaron más interesantes o atractivos?",
      tags: {
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante salir adelante",
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
      },
    },
    {
      id: "cuidador_1_7",
      meaning: "",
      actor: "cuidador_1",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_8",
      meaning: "",
      actor: "cuidador_1",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_9",
      meaning: "",
      actor: "cuidador_1",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que un compartir permitiría el acompañamiento académico que realiza con el estudiante",
          "El cuidador cree que los juegos y nuevas dinámicas les permitirían el acompañamiento académico que realiza con el estudiante",
        ],
        "conciencia de roles": [
          "El cuidador considera que actividades de autosuperación para el cuidador permitiria acompañar académicamente al estudiante",
        ],
      },
    },
    {
      id: "cuidador_1_12",
      meaning: "",
      actor: "cuidador_1",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de facilitador de conocimiento",
        ],
      },
    },
    {
      id: "cuidador_1_14",
      meaning: "",
      actor: "cuidador_1",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que la intervención permite que el estudiante tenga mejores calificaciones",
        ],
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante aprenda más y mejor",
        ],
      },
    },
    {
      id: "cuidador_1_15",
      meaning: "",
      actor: "cuidador_1",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que las rutinas de estudio les permiten tener claros los horarios y responsabilidades académicas a desarrollar",
        ],
      },
    },
    {
      id: "cuidador_1_16",
      meaning: "",
      actor: "cuidador_1",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
    {
      id: "cuidador_1_17",
      meaning: "",
      actor: "cuidador_1",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los audios y los videos informativos fortalecerían las rutinas de estudios",
        ],
      },
    },
    {
      id: "cuidador_1_18",
      meaning: "",
      actor: "cuidador_1",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
        "conciencia de roles": [
          "El cuidador considera que la interacción con los demás cuidadores genera aprendizaje colaborativo",
        ],
      },
    },
    {
      id: "cuidador_1_22",
      meaning: "",
      actor: "cuidador_1",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que la falta de internet dificulta la participación en proyectos de intervención",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_2_1",
      meaning: "",
      actor: "cuidador_2",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante se sienta acompañado",
        ],
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante aprenda más y mejor",
        ],
      },
    },
    {
      id: "cuidador_2_2",
      meaning: "",
      actor: "cuidador_2",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que está más pendiente de la educación del estudiante",
          "El cuidador considera que está más pendiente de lo que no entiende el estudiante",
          "El cuidador considera que está más pendiente de las tareas del estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_3",
      meaning: "",
      actor: "cuidador_2",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que la falta de entendimiento por parte del estudiante le ha impedido involucrarse más en la educación del estudiante",
          "El cuidador considera que repetir temas ya estudiados junto con el estudiante le ha impedido involucrarse más en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_4",
      meaning: "",
      actor: "cuidador_2",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que leer y explicar al estudiante lo que debe aprender es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_2_5",
      meaning: "",
      actor: "cuidador_2",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el estudiante está más despierto académicamente",
        ],
        "habilidades socioemocionales": [
          "El cuidador considera que al estudiante ya no le da pena hacer preguntas a la docente",
          "El cuidador considera que se generó un clima de confianza entre el cuidador y el estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_7",
      meaning: "",
      actor: "cuidador_2",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
        "compromiso académico": [
          "El cuidador espera estar más pendiente del acompañamiento académico en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_8",
      meaning: "",
      actor: "cuidador_2",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_9",
      meaning: "",
      actor: "cuidador_2",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los juegos y nuevas dinámicas les permitirían el acompañamiento académico que realiza con el estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_11",
      meaning: "",
      actor: "cuidador_2",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_2_12",
      meaning: "",
      actor: "cuidador_2",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de acompañamiento académico constante y consciente",
        ],
      },
    },
    {
      id: "cuidador_2_14",
      meaning: "",
      actor: "cuidador_2",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera el estudiante tendrá más deseo, motivación o interés de estudiar gracias al proyecto de intervención",
        ],
        "conciencia de roles": [
          "El cuidador considera que el estudiante le va a solicitar más acompañamiento académico",
        ],
      },
    },
    {
      id: "cuidador_2_15",
      meaning: "",
      actor: "cuidador_2",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que las rutinas de estudio desarrollan responsabilidad en el estudiante",
          "El cuidador considera que las rutinas de estudio permitirán que el estudiante aprenderá más fácilmente",
        ],
      },
    },
    {
      id: "cuidador_2_16",
      meaning: "",
      actor: "cuidador_2",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de costumbre en el estudiante ha impedido el establecimiento de rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_2_17",
      meaning: "",
      actor: "cuidador_2",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los audios y los videos informativos fortalecerían las rutinas de estudios",
        ],
      },
    },
    {
      id: "cuidador_2_18",
      meaning: "",
      actor: "cuidador_2",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
        "conciencia de roles": [
          "El cuidador considera que la interacción con los demás cuidadores genera aprendizaje colaborativo",
        ],
      },
    },
    {
      id: "cuidador_2_22",
      meaning: "",
      actor: "cuidador_2",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_3_1",
      meaning: "",
      actor: "cuidador_3",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
      },
    },
    {
      id: "cuidador_3_2",
      meaning: "",
      actor: "cuidador_3",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que acompaña más al estudiante",
        ],
      },
    },
    {
      id: "cuidador_3_3",
      meaning: "",
      actor: "cuidador_3",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
    {
      id: "cuidador_3_4",
      meaning: "",
      actor: "cuidador_3",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que estar presente para resolver las dudas que el estudiante tenga es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_3_5",
      meaning: "",
      actor: "cuidador_3",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que estaba dormido frente a las necesidades académicas del estudiante",
          "El cuidador reconoce la importancia del acompañamiento académico",
        ],
      },
    },
    {
      id: "cuidador_3_7",
      meaning: "",
      actor: "cuidador_3",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador espera que el acompañamiento académico desarrolle la pérdida del miedo en el estudiante",
          "El cuidador espera que el acompañamiento académico potencie la interacción social por parte del estudiante",
          "El cuidador espera que el acompañamiento académico genere sensación de apoyo en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_3_8",
      meaning: "",
      actor: "cuidador_3",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
          "El cuidador considera que los libros le permitirán involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_3_9",
      meaning: "",
      actor: "cuidador_3",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los juegos y nuevas dinámicas les permitirían el acompañamiento académico que realiza con el estudiante",
        ],
        "compromiso académico": [
          "El cuidador considera que actividades de autosuperación para el cuidador permitiria acompañar académicamente al estudiante",
        ],
      },
    },
    {
      id: "cuidador_3_11",
      meaning: "",
      actor: "cuidador_3",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_3_12",
      meaning: "",
      actor: "cuidador_3",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que su rol le permite al estudiante sentirse apoyados y con confianza",
        ],
      },
    },
    {
      id: "cuidador_3_14",
      meaning: "",
      actor: "cuidador_3",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que el estudiante va a sentirse seguro y respaldado al saber que tiene apoyo",
        ],
      },
    },
    {
      id: "cuidador_3_15",
      meaning: "",
      actor: "cuidador_3",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que las rutinas de estudio les permiten tener claros los horarios y responsabilidades académicas a desarrollar",
        ],
      },
    },
    {
      id: "cuidador_3_16",
      meaning: "",
      actor: "cuidador_3",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de costumbre en el estudiante ha impedido el establecimiento de rutinas de estudio",
        ],
        "conciencia de roles": [
          "El cuidador considera que la percepción del estudiante hacia él como actora ajena al conocimiento ha impedido establecer de rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_3_18",
      meaning: "",
      actor: "cuidador_3",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
        "conciencia de roles": [
          "El cuidador considera que la interacción con los demás cuidadores genera aprendizaje colaborativo",
        ],
      },
    },
    {
      id: "cuidador_3_22",
      meaning: "",
      actor: "cuidador_3",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_4_1",
      meaning: "",
      actor: "cuidador_4",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el cuidador y el estudiante aprendan",
        ],
      },
    },
    {
      id: "cuidador_4_2",
      meaning: "",
      actor: "cuidador_4",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el cuidador y el estudiante aprendan",
        ],
      },
    },
    {
      id: "cuidador_4_3",
      meaning: "",
      actor: "cuidador_4",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que el estudiante sepa más que él le ha impedido involucrarse más en su educación",
          "El cuidador considera que ha olvidado cosas, y esto le ha impedido involucrarse más en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_4_4",
      meaning: "",
      actor: "cuidador_4",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que estar presente para que el estudiante se sienta apoyado es una acción efectiva para el aprendizaje",
          "El cuidador considera que prestarle atención al estudiante mientras estudia es una acción efectiva para el aprendizaje",
        ],
        "compromiso académico": [
          "El cuidador considera que revisar las tareas que debe realizar el estudiante es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_4_5",
      meaning: "",
      actor: "cuidador_4",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico le permite al cuidador conocer al niño y a la docente",
        ],
      },
    },
    {
      id: "cuidador_4_6",
      meaning: "",
      actor: "cuidador_4",
      reactive: "6",
      question:
        "¿Qué aspectos del proyecto de intervención le resultaron más interesantes o atractivos?",
      tags: {
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico sea algo permanente en la educación del estudiante",
        ],
        "conciencia de roles": [
          "El cuidador espera que el acompañamiento académico fomente un aprendizaje constante entre el estudiante y el cuidador",
        ],
      },
    },
    {
      id: "cuidador_4_7",
      meaning: "",
      actor: "cuidador_4",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador espera que el acompañamiento académico desarrolle la pérdida del miedo en el estudiante",
          "El cuidador espera que el acompañamiento académico potencie la interacción social por parte del estudiante",
          "El cuidador espera que el acompañamiento académico genere sensación de apoyo en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_4_8",
      meaning: "",
      actor: "cuidador_4",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
          "El cuidador considera que las guías de ayuda le permitirán involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_4_11",
      meaning: "",
      actor: "cuidador_4",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_4_12",
      meaning: "",
      actor: "cuidador_4",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de acompañamiento académico constante y consciente",
          "El cuidador considera que su rol le permite al estudiante sentirse apoyados y con confianza",
        ],
      },
    },
    {
      id: "cuidador_4_14",
      meaning: "",
      actor: "cuidador_4",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera el estudiante tendrá más deseo, motivación o interés de estudiar gracias al proyecto de intervención",
        ],
      },
    },
    {
      id: "cuidador_4_16",
      meaning: "",
      actor: "cuidador_4",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de deseo de estudiar por parte del estudiante impidió el establecimiento de rutinas de estudio",
          "El cuidador considera que la falta de costumbre en el estudiante ha impedido el establecimiento de rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_4_17",
      meaning: "",
      actor: "cuidador_4",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que las actividades lúdicas e innovadoras apoyan en el aprendizaje del estudiante",
        ],
      },
    },
    {
      id: "cuidador_4_18",
      meaning: "",
      actor: "cuidador_4",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
      },
    },
    {
      id: "cuidador_4_22",
      meaning: "",
      actor: "cuidador_4",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que la falta de internet dificulta la participación en proyectos de intervención",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_5_1",
      meaning: "",
      actor: "cuidador_5",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite saber cómo los docentes tratan al estudiante",
        ],
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
      },
    },
    {
      id: "cuidador_5_2",
      meaning: "",
      actor: "cuidador_5",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el cuidador y el estudiante aprendan",
        ],
      },
    },
    {
      id: "cuidador_5_3",
      meaning: "",
      actor: "cuidador_5",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
    {
      id: "cuidador_5_4",
      meaning: "",
      actor: "cuidador_5",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que conocer el estilo de aprendizaje del estudiante es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_5_5",
      meaning: "",
      actor: "cuidador_5",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador reconoce los resultados del acompañamiento académico en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_5_8",
      meaning: "",
      actor: "cuidador_5",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_5_9",
      meaning: "",
      actor: "cuidador_5",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los juegos y nuevas dinámicas les permitirían el acompañamiento académico que realiza con el estudiante",
        ],
      },
    },
    {
      id: "cuidador_5_11",
      meaning: "",
      actor: "cuidador_5",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_5_12",
      meaning: "",
      actor: "cuidador_5",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de facilitador de conocimiento",
        ],
      },
    },
    {
      id: "cuidador_5_15",
      meaning: "",
      actor: "cuidador_5",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera las rutinas de estudio son importantes para evitar la curva del olvido",
        ],
      },
    },
    {
      id: "cuidador_5_16",
      meaning: "",
      actor: "cuidador_5",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de costumbre en el estudiante ha impedido el establecimiento de rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_5_17",
      meaning: "",
      actor: "cuidador_5",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los audios y los videos informativos fortalecerían las rutinas de estudios",
        ],
      },
    },
    {
      id: "cuidador_5_18",
      meaning: "",
      actor: "cuidador_5",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
      },
    },
    {
      id: "cuidador_5_22",
      meaning: "",
      actor: "cuidador_5",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de disposición y falta de interés dificulta la participación",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_6_1",
      meaning: "",
      actor: "cuidador_6",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante aprenda más y mejor",
        ],
      },
    },
    {
      id: "cuidador_6_2",
      meaning: "",
      actor: "cuidador_6",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que si le explica al estudiante este aprende más fácil",
        ],
      },
    },
    {
      id: "cuidador_6_4",
      meaning: "",
      actor: "cuidador_6",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que conocer el estilo de aprendizaje del estudiante es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_6_5",
      meaning: "",
      actor: "cuidador_6",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador aprendió cómo se debe tratar al estudiante cuando está realizando el acompañamiento académico",
        ],
      },
    },
    {
      id: "cuidador_6_7",
      meaning: "",
      actor: "cuidador_6",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico sea algo permanente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_8",
      meaning: "",
      actor: "cuidador_6",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que las guías de ayuda le permitirán involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_9",
      meaning: "",
      actor: "cuidador_6",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que actividades de autosuperación para el cuidador permitiria acompañar académicamente al estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_11",
      meaning: "",
      actor: "cuidador_6",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_12",
      meaning: "",
      actor: "cuidador_6",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de facilitador de conocimiento",
        ],
      },
    },
    {
      id: "cuidador_6_14",
      meaning: "",
      actor: "cuidador_6",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que aumentará el acompañamiento académico hacia el estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_15",
      meaning: "",
      actor: "cuidador_6",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que las rutinas de estudio son positivas siempre y cuando se evite el agotamiento en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_6_16",
      meaning: "",
      actor: "cuidador_6",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de deseo de estudiar por parte del estudiante impidió el establecimiento de rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_6_17",
      meaning: "",
      actor: "cuidador_6",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que los audios y los videos informativos fortalecerían las rutinas de estudios",
        ],
      },
    },
    {
      id: "cuidador_6_18",
      meaning: "",
      actor: "cuidador_6",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con  los demás cuidadores genera sensaciones positivas",
        ],
      },
    },
    {
      id: "cuidador_6_22",
      meaning: "",
      actor: "cuidador_6",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
  ],
  [
    {
      id: "cuidador_7_1",
      meaning: "",
      actor: "cuidador_7",
      reactive: "1",
      question:
        "¿Qué opinión tiene sobre la importancia del acompañamiento académico de los padres en la educación de sus hijos?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que el acompañamiento académico permite que el estudiante aprenda más y mejor",
        ],
        "capacidad académica": [
          "El cuidador espera que el acompañamiento académico le permita al estudiante mejorar académicamente",
        ],
      },
    },
    {
      id: "cuidador_7_2",
      meaning: "",
      actor: "cuidador_7",
      reactive: "2",
      question:
        "¿Ha mejorado el nivel de participación del padre y de la madre en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador relaciona el apoyo académico con el aprendizaje del estudiante",
        ],
        "compromiso académico": [
          "El cuidador distribuye el acompañamiento académico junto con la madre de acuerdo a su capacidad académica",
        ],
      },
    },
    {
      id: "cuidador_7_3",
      meaning: "",
      actor: "cuidador_7",
      reactive: "3",
      question:
        "¿Qué barreras o desafíos ha enfrentado al intentar involucrarse más en la educación de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que su falta de formación académica le ha impedido involucrarse más en la educación del estudiante",
          "El cuidador considera que su falta de conocimiento le ha impedido involucrarse más en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_7_4",
      meaning: "",
      actor: "cuidador_7",
      reactive: "4",
      question:
        "¿Qué actividades o acciones considera más efectivas para apoyar el aprendizaje de su hijo/a en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que sacar tiempo para acompañar al estudiante es una acción efectiva para el aprendizaje",
          "El cuidador considera que sentarse junto con el estudiante a estudiar es una acción efectiva para el aprendizaje",
        ],
        "habilidades socioemocionales": [
          "El cuidador considera que dialogar con el estudiante frente al estudio es una acción efectiva para el aprendizaje",
        ],
        "conciencia de roles": [
          "El cuidador considera que ver al estudiante como fuente de conocimiento es una acción efectiva para el aprendizaje",
        ],
      },
    },
    {
      id: "cuidador_7_5",
      meaning: "",
      actor: "cuidador_7",
      reactive: "5",
      question:
        "¿Cree que este proyecto de intervención le ayudó a mejorar su participación en la educación de su hijo/a?",
      tags: {
        "conciencia de roles": [
          "El cuidador considera que dejar solo al estudiante lo afecta negativamente",
        ],
      },
    },
    {
      id: "cuidador_7_7",
      meaning: "",
      actor: "cuidador_7",
      reactive: "7",
      question:
        "¿Qué expectativas tiene sobre los resultados que se puedan lograr con este proyecto?",
      tags: {
        "conciencia de roles": [
          "El cuidador espera que se genere conciencia y conocimiento por parte de los demás cuidadores sobre el acompañamiento académico",
        ],
      },
    },
    {
      id: "cuidador_7_8",
      meaning: "",
      actor: "cuidador_7",
      reactive: "8",
      question:
        "¿Qué recursos o apoyos considera necesarios para poder involucrarse más activamente en la educación de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera que el internet permitirá involucrarse activamente en la educación del estudiante",
        ],
      },
    },
    {
      id: "cuidador_7_9",
      meaning: "",
      actor: "cuidador_7",
      reactive: "9",
      question:
        "¿Qué actividades específicas le gustaría que se incluyeran en este proyecto de intervención?",
      tags: {
        "recursos educativos": [
          "El cuidador le gustaría que se incluyeran actividades para mejorar su acompañamiento académico en el estudiante",
        ],
      },
    },
    {
      id: "cuidador_7_11",
      meaning: "",
      actor: "cuidador_7",
      reactive: "11",
      question:
        "¿Qué tipo de información o retroalimentación le gustaría recibir de la escuela sobre el progreso académico de su hijo/a?",
      tags: {
        "recursos educativos": [
          "El cuidador considera necesario un informe rutinario sobre la actualidad académica del estudiante",
        ],
      },
    },
    {
      id: "cuidador_7_12",
      meaning: "",
      actor: "cuidador_7",
      reactive: "12",
      question:
        "¿Cómo se imagina su rol como padre/madre dentro de este proyecto de intervención?",
      tags: {
        "conciencia de roles": [
          "El cuidador se percibe con un rol de acompañamiento académico constante y consciente",
        ],
      },
    },
    {
      id: "cuidador_7_14",
      meaning: "",
      actor: "cuidador_7",
      reactive: "14",
      question:
        "¿Cómo cree que el proyecto de intervención puede contribuir al éxito académico de su hijo/a?",
      tags: {
        "capacidad académica": [
          "El cuidador considera que la intervención permite que el estudiante tenga mejores calificaciones",
          "El cuidador considera el estudiante tendrá proyección de estudiar en instituciones de educación superior",
        ],
        "compromiso académico": [
          "El cuidador considera el estudiante tendrá más deseo, motivación o interés de estudiar gracias al proyecto de intervención",
        ],
      },
    },
    {
      id: "cuidador_7_15",
      meaning: "",
      actor: "cuidador_7",
      reactive: "15",
      question:
        "¿Cuál es su percepción sobre la importancia de establecer rutinas y hábitos de estudio en casa?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que las rutinas de estudio les permiten tener claros los horarios y responsabilidades académicas a desarrollar",
          "El cuidador considera que las rutinas de estudio le permiten al estudiante tener tiempo para jugar",
        ],
      },
    },
    {
      id: "cuidador_7_16",
      meaning: "",
      actor: "cuidador_7",
      reactive: "16",
      question:
        "¿Qué dificultades ha encontrado al intentar establecer rutinas de estudio con su hijo/a?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que el cruce de horarios por el trabajo, la falta o el orden en el tiempo dificultó su acompañamiento",
        ],
      },
    },
    {
      id: "cuidador_7_17",
      meaning: "",
      actor: "cuidador_7",
      reactive: "17",
      question:
        "¿Qué apoyo o guía adicional le gustaría recibir para fortalecer las rutinas de estudio en casa?",
      tags: {
        "recursos educativos": [
          "El cuidador cree que el internet fortalece las rutinas de estudio",
        ],
      },
    },
    {
      id: "cuidador_7_18",
      meaning: "",
      actor: "cuidador_7",
      reactive: "18",
      question:
        "¿Cómo se siente respecto a la colaboración con otros padres en actividades relacionadas con el proyecto de intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El cuidador considera que la interacción con los demás cuidadores genera mayor por el estudiante",
        ],
      },
    },
    {
      id: "cuidador_7_22",
      meaning: "",
      actor: "cuidador_7",
      reactive: "22",
      question:
        "¿Qué aspectos del proyecto considera que podrían dificultar la participación de los padres y cómo se podrían abordar?",
      tags: {
        "compromiso académico": [
          "El cuidador considera que la falta de disposición y falta de interés dificulta la participación",
        ],
      },
    },
  ],
  [
    {
      id: "docente_1",
      meaning: "",
      actor: "docente",
      reactive: "1",
      question:
        "¿Cuáles fueron los criterios de éxito o los indicadores utilizados para evaluar la efectividad de la intervención?",
      tags: {
        "compromiso académico": [
          "El docente-investigador considera como exitosa la participación de los cuidadores y estudiantes",
          "El docente-investigador considera como exitoso los cambios comportamentales de estudiantes y cuidadores",
          "El docente-investigador considera exitosa el cambio de comunicación hacia el docente",
        ],
      },
    },
    {
      id: "docente_2",
      meaning: "",
      actor: "docente",
      reactive: "2",
      question:
        "¿Qué resultados o impacto se han observado hasta el momento como consecuencia de la intervención?",
      tags: {
        "habilidades socioemocionales": [
          "El docente-investigador reconoce que mejoró la comunicación entre docente y cuidadores",
          "El docente-investigador reconoce el cambio de actitud por parte de los cuidadores frente a la comunicación con el docente",
        ],
        "compromiso académico": [
          "El docente-investigador reconoce que los cuidadores empezaron a hacer uso de mensajes digitales y fisicos para comunicarse con el docente",
          "El docente-investigador reconoce que se generó un interes en los cuidadores frente al rendimiento académico de los estudiantes",
        ],
      },
    },
    {
      id: "docente_3",
      meaning: "",
      actor: "docente",
      reactive: "3",
      question:
        "¿Cuáles fueron los principales desafíos o dificultades encontradas durante la implementación de la intervención?",
      tags: {
        "capacidad académica": [
          "El docente-investigador considera que el poco conocimiento del uso de la tecnología fué un desafió para la intervención",
        ],
        "compromiso académico": [
          "El docente-investigador considera que la nula participación de los cuidadores más desinteresados fué un desafió para la intervención",
        ],
      },
    },
    {
      id: "docente_6",
      meaning: "",
      actor: "docente",
      reactive: "6",
      question:
        "¿Qué actividades o estrategias resultaron ser las más efectivas para fomentar la participación de los padres?",
      tags: {
        "recursos educativos": [
          "El docente-investigador considera que las actividades fisicas fueron efectivas",
          "El docente-investigador considera que las actividades relacionadas con redes sociales fueron efectivas",
        ],
      },
    },
    {
      id: "docente_8",
      meaning: "",
      actor: "docente",
      reactive: "8",
      question:
        "¿Cómo se fomentó la comunicación entre los padres y la escuela durante la intervención?",
      tags: {
        "compromiso académico": [
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de excusas",
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de sorpresa",
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de reflexión",
        ],
      },
    },
    {
      id: "docente_10",
      meaning: "",
      actor: "docente",
      reactive: "10",
      question:
        "¿Cuáles fueron las reacciones y percepciones de los padres participantes frente a la intervención?",
      tags: {
        "compromiso académico": [
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de excusas",
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de sorpresa",
          "El docente-investigador menciona que las reacciones de los cuidadores frente al proyecto de intervención eran de reflexión",
        ],
      },
    },
    {
      id: "docente_11",
      meaning: "",
      actor: "docente",
      reactive: "11",
      question:
        "¿Qué lecciones se aprendieron con el proyecto de intervención y cómo podrían aplicarse en futuras iniciativas similares?",
      tags: {
        "compromiso académico": [
          "El docente-investigador considera como lección más importante que aprende quien quiere aprender",
        ],
      },
    },
    {
      id: "docente_12",
      meaning: "",
      actor: "docente",
      reactive: "12",
      question:
        "¿Cómo se podría mejorar o ampliar esta intervención en el futuro?",
      tags: {
        "recursos educativos": [
          "El docente-investigador considera que desarrollar actividades de alfabetización digital puede ser importante para el futuro",
        ],
      },
    },
    {
      id: "docente_13",
      meaning: "",
      actor: "docente",
      reactive: "13",
      question:
        "¿Se identificaron diferencias o variaciones en la participación de los padres según su contexto socioeconómico o cultural?",
      tags: {
        "recursos educativos": [
          "El docente-investigador reconoce que se identificó una relación entre el manejo tecnologico y el contexto socioeconomico y cultural de los cuidadores",
        ],
        "compromiso académico": [
          "El docente-investigador reconoce que se identificaron resistencias en los cuidadores para tomar el rol de maestro hacia los estudiantes",
          "El docente-investigador reconoce que se identifiaron resistencias frente a la posición de aprendizajes nuevos en los cuidadores debido a su edad",
        ],
        "conciencia de roles": [
          "Los cuidadores se percibian viejos para aprender cosas nuevas",
        ],
      },
    },
    {
      id: "docente_14",
      meaning: "",
      actor: "docente",
      reactive: "14",
      question:
        "¿Se realizaron adaptaciones o actoralizaciones de la intervención para abordar esas diferencias?",
      tags: {
        "recursos educativos": [
          "El docente-investigador reconoce que se facilitó el acceso de tablets para que los estudiantes y los cuidadores realizaran las actividades planteadas",
          "El docente-investigador reconoció que algunos padres prestaron cuentas en linea a quienes no tenian",
        ],

        "recursos educativos": [
          "El docente-investigador permitió que las actividades digitales podian ser realizadas a mano",
        ],
      },
    },
    {
      id: "docente_15",
      meaning: "",
      actor: "docente",
      reactive: "15",
      question:
        "¿Qué recomendaciones darían a otras instituciones o educadores que deseen implementar un proyecto similar?",
      tags: {
        "recursos educativos": [
          "El docente-investigador sugiere el desarrollo de más actividades presenciales para proyectos similares",
        ],
      },
    },
    {
      id: "docente_17",
      meaning: "",
      actor: "docente",
      reactive: "17",
      question:
        "¿Qué aspectos del proyecto de intervención consideraron más gratificantes o exitosos?",
      tags: {
        "habilidades socioemocionales": [
          "El docente-investigador considera exitosa la interacción entre cuidadores y estudiantes",
        ],
        "compromiso académico": [
          "El docente-investigador considera exitoso el desarrollo del interes en los cuidadores por actividades académicas",
        ],
      },
    },
  ],
];

export default surveys;
