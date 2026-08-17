/*
  AT THE DOCTOR — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Si hay más de una traducción natural, se separan con " / ".
*/

window.AT_THE_DOCTOR_DATA = [
  // ---------- GOING TO THE DOCTOR ----------
  { category: "Going to the Doctor", es: "Necesito ir a la guardia a ver un doctor, no me siento bien.", en: "I need to go to the ER to see a doctor, I don't feel well. / I need to go to emergency to see a doctor, I don't feel well." },
  { category: "Going to the Doctor", es: "La guardia está abierta 24 horas.", en: "The ER is open 24 hours. / Emergency is open 24 hours." },
  { category: "Going to the Doctor", es: "Tengo un turno con el doctor a las 10 en su consultorio.", en: "I have an appointment with the doctor at 10 in his office." },
  { category: "Going to the Doctor", es: "El doctor no está en su consultorio.", en: "The doctor isn't in his office." },
  { category: "Going to the Doctor", es: "Hay muchos pacientes esperando en la guardia, pero una enfermera te verá pronto.", en: "There are many patients waiting in the ER, but a nurse will see you soon." },
  { category: "Going to the Doctor", es: "La sala de espera está llena, tendremos que ser pacientes.", en: "The waiting room is full, we'll have to be patient." },
  { category: "Going to the Doctor", es: "Primero la enfermera tomará tu temperatura y te hará algunas preguntas.", en: "First the nurse will take your temperature and ask you some questions." },
  { category: "Going to the Doctor", es: "El enfermero necesita revisar si tengo fiebre, tal vez me dará algo para la fiebre.", en: "The nurse needs to check if I have a fever, maybe he'll give me something for the fever." },

  // ---------- SYMPTOMS ----------
  { category: "Symptoms", es: "Tengo un dolor de cabeza terrible que no para.", en: "I have a terrible headache that won't stop." },
  { category: "Symptoms", es: "Empezó ayer y me está matando.", en: "It started yesterday and it's killing me." },
  { category: "Symptoms", es: "Doctor, me duele el brazo, no puedo moverlo.", en: "Doctor, my arm hurts, I can't move it." },
  { category: "Symptoms", es: "Eso duele.", en: "That hurts." },
  { category: "Symptoms", es: "No siento el dedo.", en: "I can't feel my finger." },
  { category: "Symptoms", es: "Me duele la mano.", en: "My hand hurts." },
  { category: "Symptoms", es: "No me siento bien, estoy mareado.", en: "I don't feel well, I'm dizzy." },
  { category: "Symptoms", es: "Me siento mareado en las mañanas.", en: "I feel dizzy in the mornings." },
  { category: "Symptoms", es: "Tengo dolor de muela, necesito ver a un dentista.", en: "I have a toothache, I need to see a dentist." },
  { category: "Symptoms", es: "No puedo trabajar con dolor de muela.", en: "I can't work with a toothache." },
  { category: "Symptoms", es: "Tengo dolor de estómago desde ayer, vomito cada 3 horas.", en: "I've had a stomachache since yesterday, I throw up every 3 hours." },
  { category: "Symptoms", es: "No puedo comer nada.", en: "I can't eat anything." },
  { category: "Symptoms", es: "Tengo mucha tos, siento algo en el pecho.", en: "I have a bad cough, I feel something in my chest." },
  { category: "Symptoms", es: "No puedo parar de toser.", en: "I can't stop coughing." },
  { category: "Symptoms", es: "Esa tos suena horrible.", en: "That cough sounds horrible." },
  { category: "Symptoms", es: "Me caí y ahora tengo un hueso roto.", en: "I fell and now I have a broken bone." },
  { category: "Symptoms", es: "Me caí cuando estaba trabajando.", en: "I fell when I was working." },
  { category: "Symptoms", es: "Tengo un resfriado.", en: "I have a cold." },
  { category: "Symptoms", es: "Es un virus.", en: "It's a virus." },
  { category: "Symptoms", es: "Nunca tuve este problema antes, es la primera vez que me pasa.", en: "I never had this problem before, it's the first time this happens to me." },

  // ---------- MEDICATION ----------
  { category: "Medication", es: "Necesito un analgésico pero no sé qué tomar.", en: "I need a painkiller but I don't know what to take." },
  { category: "Medication", es: "¿Podés darme un analgésico más fuerte?", en: "Can you give me a stronger painkiller?" },
  { category: "Medication", es: "He estado tomando esta pastilla pero no funciona.", en: "I've been taking this pill but it doesn't work." },
  { category: "Medication", es: "He estado tomando esta pastilla por 3 días pero no mejoro.", en: "I've been taking this pill for 3 days but I'm not getting better." },
  { category: "Medication", es: "Quiero mejorar rápido.", en: "I want to get better quickly." },
  { category: "Medication", es: "¿Puede cambiar las pastillas? Estas me hacen sentir mal.", en: "Can you change the pills? These make me feel sick." },
  { category: "Medication", es: "¿Puedo tomar alcohol mientras estoy con las pastillas?", en: "Can I drink alcohol while I'm on these pills?" },
  { category: "Medication", es: "El doctor me dio una receta para comprar las pastillas.", en: "The doctor gave me a prescription to buy the pills." },
  { category: "Medication", es: "Estoy yendo a la farmacia con la receta.", en: "I'm going to the pharmacy with the prescription." },
  { category: "Medication", es: "Necesito gotas para los ojos cada 8 horas.", en: "I need eye drops every 8 hours." },
  { category: "Medication", es: "Podés conseguir las gotas en la farmacia.", en: "You can get the drops at the pharmacy." },
  { category: "Medication", es: "El doctor me dio una crema.", en: "The doctor gave me a cream." },
  { category: "Medication", es: "Tengo que usar la crema por una semana.", en: "I have to use the cream for a week." },
  { category: "Medication", es: "Tengo que probarla y ver resultados.", en: "I have to try it and see the results." },

  // ---------- TESTS AND TREATMENT ----------
  { category: "Tests and Treatment", es: "Tal vez necesite un examen de sangre.", en: "Maybe I need a blood test." },
  { category: "Tests and Treatment", es: "Puedo hacer el examen en el laboratorio.", en: "I can do the test at the lab." },
  { category: "Tests and Treatment", es: "El doctor necesita ver un examen de sangre.", en: "The doctor needs to see a blood test." },
  { category: "Tests and Treatment", es: "El doctor me envió a un especialista, necesito un tratamiento más específico.", en: "The doctor sent me to a specialist, I need a more specific treatment." },
  { category: "Tests and Treatment", es: "¿Cuánto cuesta el tratamiento?", en: "How much does the treatment cost?" },
  { category: "Tests and Treatment", es: "¿Hay otra solución?", en: "Is there another solution?" },
  { category: "Tests and Treatment", es: "¿Qué podría pasar si no hago el tratamiento?", en: "What could happen if I don't do the treatment?" },
  { category: "Tests and Treatment", es: "¿Qué podría pasar si no tomo las pastillas?", en: "What could happen if I don't take the pills?" },
  { category: "Tests and Treatment", es: "Necesito una vacuna cada año.", en: "I need a vaccine every year." },
  { category: "Tests and Treatment", es: "La vacuna ayuda con el virus.", en: "The vaccine helps with the virus." },

  // ---------- QUESTIONS FOR THE DOCTOR ----------
  { category: "Questions for the Doctor", es: "¿Qué recomienda, doctor?", en: "What do you recommend, doctor?" },
  { category: "Questions for the Doctor", es: "¿Qué ve, doctor?", en: "What do you see, doctor?" },
  { category: "Questions for the Doctor", es: "¿Qué necesito?", en: "What do I need?" },
  { category: "Questions for the Doctor", es: "¿Debería quedarme en casa?", en: "Should I stay home?" },
  { category: "Questions for the Doctor", es: "¿Debería ver a un especialista?", en: "Should I see a specialist?" },
  { category: "Questions for the Doctor", es: "¿Cada cuánto debería tomar esta pastilla?", en: "How often should I take this pill?" },
  { category: "Questions for the Doctor", es: "¿A qué hora debo tomarla?", en: "What time should I take it?" },
  { category: "Questions for the Doctor", es: "¿Es esto normal?", en: "Is this normal?" },
  { category: "Questions for the Doctor", es: "¿Es esto peligroso?", en: "Is this dangerous?" },
  { category: "Questions for the Doctor", es: "¿Cuándo terminará?", en: "When will it end?" },
  { category: "Questions for the Doctor", es: "¿Cuánto durará?", en: "How long will it last?" },
  { category: "Questions for the Doctor", es: "El dolor durará una semana.", en: "The pain will last a week." },
  { category: "Questions for the Doctor", es: "¿Cuándo mejoraré?", en: "When will I get better?" },
  { category: "Questions for the Doctor", es: "¿Puedo ir a trabajar hoy?", en: "Can I go to work today?" },
  { category: "Questions for the Doctor", es: "¿Cuándo tengo que volver aquí?", en: "When do I have to come back here?" },
  { category: "Questions for the Doctor", es: "¿Hay muchas personas con el mismo problema?", en: "Are there many people with the same problem?" },
  { category: "Questions for the Doctor", es: "¿Puede darme un turno para la semana que viene?", en: "Can you give me an appointment for next week?" },

  // ---------- ADVICE AND RECOVERY ----------
  { category: "Advice and Recovery", es: "El doctor dice que necesito hacer más ejercicio y comer más sano.", en: "The doctor says I need to exercise more and eat healthier." },
  { category: "Advice and Recovery", es: "Tengo que reducir el estrés y mejorar mi sueño.", en: "I have to reduce stress and improve my sleep." },
  { category: "Advice and Recovery", es: "Tengo que reducir las calorías.", en: "I have to cut calories. / I have to reduce calories." },
  { category: "Advice and Recovery", es: "El doctor dijo que necesito reposo 1 semana.", en: "The doctor said I need a week of rest." },
  { category: "Advice and Recovery", es: "El reposo es muy importante para mejorar.", en: "Rest is very important to get better." },
  { category: "Advice and Recovery", es: "Mejorará en una semana.", en: "It will get better in a week. / You'll improve in a week." }
];
