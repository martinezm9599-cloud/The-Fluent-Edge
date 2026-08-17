/*
  CONFRONTING SOMEONE — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Cuando hay más de una traducción natural, aparecen separadas por " / ".
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.CONFRONTING_SOMEONE_DATA = [
  // ---------- STARTING A SERIOUS CONVERSATION ----------
  { category: "Starting a Serious Conversation", es: "Tengo que hablar contigo.", en: "I need to talk to you." },
  { category: "Starting a Serious Conversation", es: "Tenemos que conversar.", en: "We need to talk." },
  { category: "Starting a Serious Conversation", es: "Tiene que ser hoy.", en: "It has to be today." },
  { category: "Starting a Serious Conversation", es: "Tiene que ser ahora.", en: "It has to be now." },
  { category: "Starting a Serious Conversation", es: "Tengo que retarte.", en: "I have to scold you. / I have to tell you off." },
  { category: "Starting a Serious Conversation", es: "Tengo que retarte por esto.", en: "I have to scold you for this." },
  { category: "Starting a Serious Conversation", es: "Tengo que retarte por este error.", en: "I have to scold you for this mistake." },
  { category: "Starting a Serious Conversation", es: "No me gusta retarte, pero tengo que hacerlo.", en: "I don't like scolding you, but I have to." },
  { category: "Starting a Serious Conversation", es: "Me temo que esto traerá consecuencias.", en: "I'm afraid this will have consequences." },
  { category: "Starting a Serious Conversation", es: "Me temo que esto traerá muchos problemas.", en: "I'm afraid this will cause a lot of problems." },
  { category: "Starting a Serious Conversation", es: "Me temo que esto está muy mal.", en: "I'm afraid this is really bad." },
  { category: "Starting a Serious Conversation", es: "Me temo que tienes que hacerlo de vuelta, porque no me gusta.", en: "I'm afraid you have to do it again, because I don't like it." },
  { category: "Starting a Serious Conversation", es: "Tenés que repetirlo.", en: "You have to redo it." },
  { category: "Starting a Serious Conversation", es: "Habrá consecuencias.", en: "There will be consequences." },
  { category: "Starting a Serious Conversation", es: "Habrá problemas.", en: "There will be problems." },

  // ---------- EXPRESSING ANGER & DISAPPROVAL ----------
  { category: "Expressing Anger & Disapproval", es: "Estoy muy enojado contigo.", en: "I'm really angry with you." },
  { category: "Expressing Anger & Disapproval", es: "Me haces enojar.", en: "You make me angry." },
  { category: "Expressing Anger & Disapproval", es: "Esto me hace enojar.", en: "This makes me angry." },
  { category: "Expressing Anger & Disapproval", es: "No acepto esto.", en: "I don't accept this." },
  { category: "Expressing Anger & Disapproval", es: "No lo aceptaré.", en: "I won't accept it. / I won't put up with it." },
  { category: "Expressing Anger & Disapproval", es: "No aceptaremos esto.", en: "We won't accept this." },
  { category: "Expressing Anger & Disapproval", es: "Esto no es aceptable.", en: "This isn't acceptable. / This isn't okay." },
  { category: "Expressing Anger & Disapproval", es: "Esto no es aceptable para mí.", en: "This isn't acceptable to me." },
  { category: "Expressing Anger & Disapproval", es: "Esto es inaceptable.", en: "This is unacceptable." },
  { category: "Expressing Anger & Disapproval", es: "Tu comportamiento es inaceptable.", en: "Your behavior is unacceptable." },
  { category: "Expressing Anger & Disapproval", es: "No puedes tener este comportamiento aquí.", en: "You can't behave like this here." },
  { category: "Expressing Anger & Disapproval", es: "Tú hiciste esto.", en: "You did this." },
  { category: "Expressing Anger & Disapproval", es: "Tú hiciste todo mal.", en: "You did everything wrong." },

  // ---------- PLACING BLAME ----------
  { category: "Placing Blame", es: "Esto es tu culpa.", en: "This is your fault." },
  { category: "Placing Blame", es: "No es mi culpa.", en: "It's not my fault." },
  { category: "Placing Blame", es: "Tú tienes que cambiar.", en: "You have to change." },
  { category: "Placing Blame", es: "Tenés que cambiar tu comportamiento.", en: "You have to change your behavior." },
  { category: "Placing Blame", es: "No culpes a otras personas.", en: "Don't blame other people." },
  { category: "Placing Blame", es: "No me culpes por esto.", en: "Don't blame me for this." },
  { category: "Placing Blame", es: "No prestas atención y luego me culpas.", en: "You don't pay attention and then you blame me." },
  { category: "Placing Blame", es: "No escuchas cuando yo hablo y luego me culpas.", en: "You don't listen when I talk and then you blame me." },
  { category: "Placing Blame", es: "Tenés que escucharme más.", en: "You have to listen to me more." },
  { category: "Placing Blame", es: "Tú eres responsable por este problema.", en: "You're responsible for this problem." },
  { category: "Placing Blame", es: "Tú eres responsable por todo.", en: "You're responsible for everything." },

  // ---------- CALLING OUT BEHAVIOR ----------
  { category: "Calling Out Behavior", es: "Haces lo que quieres.", en: "You do whatever you want." },
  { category: "Calling Out Behavior", es: "No me gusta lo que veo.", en: "I don't like what I see." },
  { category: "Calling Out Behavior", es: "No me gusta lo que tú haces.", en: "I don't like what you do." },
  { category: "Calling Out Behavior", es: "No me gusta lo que tú haces cuando estás aquí.", en: "I don't like what you do when you're here." },
  { category: "Calling Out Behavior", es: "No me gusta lo que tú haces con el dinero.", en: "I don't like what you do with the money." },
  { category: "Calling Out Behavior", es: "Siempre cometes errores.", en: "You always make mistakes." },
  { category: "Calling Out Behavior", es: "Siempre cometes este error.", en: "You always make this mistake." },
  { category: "Calling Out Behavior", es: "Tienes que parar.", en: "You have to stop. / You need to stop." },
  { category: "Calling Out Behavior", es: "Tienes que parar con esto.", en: "You have to stop this." },
  { category: "Calling Out Behavior", es: "Siempre haces lo mismo.", en: "You always do the same thing." },
  { category: "Calling Out Behavior", es: "No te puedes comportar así.", en: "You can't behave like that. / You can't act like that." },
  { category: "Calling Out Behavior", es: "Compórtate como un adulto.", en: "Behave like an adult. / Act like an adult." },
  { category: "Calling Out Behavior", es: "Los adultos no se comportan así.", en: "Adults don't behave like that." },
  { category: "Calling Out Behavior", es: "No podés hablar así.", en: "You can't talk like that." },
  { category: "Calling Out Behavior", es: "No eres un niño.", en: "You're not a kid." },
  { category: "Calling Out Behavior", es: "Ahora eres un adulto.", en: "You're an adult now." },
  { category: "Calling Out Behavior", es: "Deberías pensar lo que haces.", en: "You should think about what you do." },
  { category: "Calling Out Behavior", es: "Deberías pensar lo que dices.", en: "You should think about what you say." },
  { category: "Calling Out Behavior", es: "Lastimas a otra gente.", en: "You hurt other people." },
  { category: "Calling Out Behavior", es: "Lastimas a tus amigos haciendo eso.", en: "You hurt your friends by doing that." },
  { category: "Calling Out Behavior", es: "Te estás lastimando a vos mismo.", en: "You're hurting yourself." },

  // ---------- DISAPPOINTMENT & WARNINGS ----------
  { category: "Disappointment & Warnings", es: "Tú siempre me decepcionas.", en: "You always disappoint me." },
  { category: "Disappointment & Warnings", es: "No me decepciones otra vez.", en: "Don't disappoint me again." },
  { category: "Disappointment & Warnings", es: "Estoy muy decepcionado contigo.", en: "I'm really disappointed in you." },
  { category: "Disappointment & Warnings", es: "No hagas más esto.", en: "Don't do this anymore. / Stop doing this." },
  { category: "Disappointment & Warnings", es: "No hables más.", en: "Stop talking. / Don't talk anymore." },
  { category: "Disappointment & Warnings", es: "No quiero verte más.", en: "I don't want to see you anymore." },
  { category: "Disappointment & Warnings", es: "Mucha gente está enojada contigo.", en: "A lot of people are angry with you." },
  { category: "Disappointment & Warnings", es: "No quieren hablarte más.", en: "They don't want to talk to you anymore." },
  { category: "Disappointment & Warnings", es: "No quieren verte más.", en: "They don't want to see you anymore." },

  // ---------- TELLING SOMEONE TO LEAVE ----------
  { category: "Telling Someone to Leave", es: "¡Vete!", en: "Get out! / Leave!" },
  { category: "Telling Someone to Leave", es: "¡Vete de mi casa!", en: "Get out of my house!" },
  { category: "Telling Someone to Leave", es: "¡Vete de aquí!", en: "Get out of here! / Leave this place!" },
  { category: "Telling Someone to Leave", es: "¡Vete de la ciudad!", en: "Get out of town!" }
];
