/*
  MAKING A COMPLAINT — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.MAKING_A_COMPLAINT_DATA = [
  // ---------- REPORTING THE PROBLEM ----------
  { category: "Reporting the Problem", es: "Disculpen, me enviaron el producto equivocado.", en: "Excuse me, you sent me the wrong product." },
  { category: "Reporting the Problem", es: "Esto no es lo que yo pedí.", en: "This isn't what I ordered." },
  { category: "Reporting the Problem", es: "Yo pedí otra cosa.", en: "I ordered something else." },
  { category: "Reporting the Problem", es: "Esto no es lo que yo quería.", en: "This isn't what I wanted." },
  { category: "Reporting the Problem", es: "Yo quería otra cosa.", en: "I wanted something else." },
  { category: "Reporting the Problem", es: "Quiero cambiar el producto.", en: "I want to exchange the product." },
  { category: "Reporting the Problem", es: "Yo quería en otro color.", en: "I wanted it in a different color." },
  { category: "Reporting the Problem", es: "Yo quería en otro tamaño.", en: "I wanted it in a different size." },
  { category: "Reporting the Problem", es: "Este tamaño no es para mí.", en: "This size isn't right for me." },
  { category: "Reporting the Problem", es: "El producto está roto.", en: "The product is broken." },
  { category: "Reporting the Problem", es: "La caja está abierta.", en: "The box is open." },
  { category: "Reporting the Problem", es: "El producto no funciona.", en: "The product doesn't work." },
  { category: "Reporting the Problem", es: "No es como la imagen.", en: "It's not like the picture." },
  { category: "Reporting the Problem", es: "No es como ellos dicen.", en: "It's not like they say." },
  { category: "Reporting the Problem", es: "No es como muestran en la TV.", en: "It's not like they show on TV." },
  { category: "Reporting the Problem", es: "No es el mismo producto.", en: "It's not the same product." },
  { category: "Reporting the Problem", es: "La imagen era diferente en la foto.", en: "It looked different in the photo." },
  { category: "Reporting the Problem", es: "Compré 2 y solo vino uno.", en: "I bought 2 and only one arrived." },
  { category: "Reporting the Problem", es: "Yo no compré esto.", en: "I didn't buy this." },
  { category: "Reporting the Problem", es: "La página web no funciona.", en: "The website isn't working." },
  { category: "Reporting the Problem", es: "No abre.", en: "It won't open." },
  { category: "Reporting the Problem", es: "No acepta mi tarjeta de débito.", en: "It won't accept my debit card." },
  { category: "Reporting the Problem", es: "No recibieron mi pago.", en: "You didn't receive my payment." },
  { category: "Reporting the Problem", es: "Mi pago no fue aceptado.", en: "My payment wasn't accepted." },

  // ---------- DEMANDING A SOLUTION ----------
  { category: "Demanding a Solution", es: "Cometieron un error.", en: "You made a mistake." },
  { category: "Demanding a Solution", es: "Cometieron un gran error.", en: "You made a big mistake." },
  { category: "Demanding a Solution", es: "Cometieron un error terrible.", en: "You made a terrible mistake." },
  { category: "Demanding a Solution", es: "Este no es mi error.", en: "This isn't my mistake." },
  { category: "Demanding a Solution", es: "Este no es mi problema.", en: "This isn't my problem." },
  { category: "Demanding a Solution", es: "Hagan algo.", en: "Do something." },
  { category: "Demanding a Solution", es: "Hagan algo con este problema.", en: "Do something about this problem." },
  { category: "Demanding a Solution", es: "Quiero una solución.", en: "I want a solution." },
  { category: "Demanding a Solution", es: "Quiero hablar con el gerente.", en: "I want to talk to the manager." },
  { category: "Demanding a Solution", es: "Quiero hablar con alguien a cargo.", en: "I want to talk to someone in charge." },
  { category: "Demanding a Solution", es: "¿Quién está a cargo de esto?", en: "Who's in charge of this?" },
  { category: "Demanding a Solution", es: "Denme el número de atención al cliente.", en: "Give me the customer service number." },
  { category: "Demanding a Solution", es: "La atención al cliente fue mala.", en: "The customer service was bad." },
  { category: "Demanding a Solution", es: "La atención al cliente no fue buena.", en: "The customer service wasn't good." },
  { category: "Demanding a Solution", es: "No me gustó, quiero devolverlo.", en: "I didn't like it, I want to return it." },
  { category: "Demanding a Solution", es: "Quiero mi dinero de vuelta.", en: "I want my money back." },
  { category: "Demanding a Solution", es: "No voy a pagarte por esto.", en: "I'm not going to pay you for this." },
  { category: "Demanding a Solution", es: "No voy a aceptar esto.", en: "I'm not going to accept this." },
  { category: "Demanding a Solution", es: "No me quedaré con esto.", en: "I'm not keeping this." },

  // ---------- CALLING OUT BAD SERVICE ----------
  { category: "Calling Out Bad Service", es: "Esto no debería suceder.", en: "This shouldn't happen." },
  { category: "Calling Out Bad Service", es: "No deberían hacer esto.", en: "You shouldn't do this." },
  { category: "Calling Out Bad Service", es: "¿Cómo es posible?", en: "How is this possible?" },
  { category: "Calling Out Bad Service", es: "¿Quién hizo esto?", en: "Who did this?" },
  { category: "Calling Out Bad Service", es: "Es la segunda vez que cometen este error.", en: "This is the second time you've made this mistake." },
  { category: "Calling Out Bad Service", es: "Esta tienda comete muchos errores.", en: "This store makes a lot of mistakes." },
  { category: "Calling Out Bad Service", es: "El vendedor me mintió.", en: "The salesman lied to me." },
  { category: "Calling Out Bad Service", es: "Ustedes le mienten a la gente.", en: "You lie to people." },
  { category: "Calling Out Bad Service", es: "El vendedor dijo algo distinto.", en: "The salesman said something different." },
  { category: "Calling Out Bad Service", es: "La vendedora me mostró otra cosa.", en: "The saleswoman showed me something else." },
  { category: "Calling Out Bad Service", es: "El vendedor no fue amable.", en: "The salesman wasn't kind." },
  { category: "Calling Out Bad Service", es: "Deberían ser amables con los clientes.", en: "You should be kind to customers." },
  { category: "Calling Out Bad Service", es: "Deberían ser más amables con los clientes.", en: "You should be kinder to customers." },

  // ---------- ESCALATING & WARNING CONSEQUENCES ----------
  { category: "Escalating & Warning Consequences", es: "Perdieron un cliente por este error.", en: "You lost a customer because of this mistake." },
  { category: "Escalating & Warning Consequences", es: "Es la última vez que compro aquí.", en: "This is the last time I buy here." },
  { category: "Escalating & Warning Consequences", es: "La próxima vez compraré en otro lado.", en: "Next time I'll buy somewhere else." },
  { category: "Escalating & Warning Consequences", es: "Esto es inaceptable para mí.", en: "This is unacceptable to me." },
  { category: "Escalating & Warning Consequences", es: "Me decepcionaron.", en: "You disappointed me." },
  { category: "Escalating & Warning Consequences", es: "Estoy muy enojado por esto.", en: "I'm really angry about this." },
  { category: "Escalating & Warning Consequences", es: "El gerente debería estar aquí.", en: "The manager should be here." },
  { category: "Escalating & Warning Consequences", es: "Él debería darme una respuesta.", en: "He should give me an answer." },
  { category: "Escalating & Warning Consequences", es: "Él debería saber que esto está pasando en su tienda.", en: "He should know this is happening in his store." },
  { category: "Escalating & Warning Consequences", es: "No compraré aquí otra vez.", en: "I won't buy here again." },
  { category: "Escalating & Warning Consequences", es: "Escribiré sobre esto en las redes sociales.", en: "I'll write about this on social media." },
  { category: "Escalating & Warning Consequences", es: "Mi abogado los contactará.", en: "My lawyer will contact you." },
  { category: "Escalating & Warning Consequences", es: "Esto tendrá consecuencias.", en: "This will have consequences." }
];
