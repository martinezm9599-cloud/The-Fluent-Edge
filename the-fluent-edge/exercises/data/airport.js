/*
  AT THE AIRPORT — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Si hay más de una traducción natural, se separan con " / ".
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.AIRPORT_DATA = [
  // ---------- GOING TO THE AIRPORT ----------
  { category: "Going to the Airport", es: "Tengo que ir al aeropuerto a tomar un avión.", en: "I have to go to the airport to catch a plane. / I have to go to the airport to take a flight." },
  { category: "Going to the Airport", es: "¿Puedes llevarme al aeropuerto?", en: "Can you take me to the airport? / Can you drive me to the airport?" },
  { category: "Going to the Airport", es: "Mi próximo destino es Europa.", en: "My next destination is Europe." },
  { category: "Going to the Airport", es: "¿Cuál es tu destino?", en: "What's your destination? / What is your destination?" },

  // ---------- TICKETS ----------
  { category: "Tickets", es: "Tengo un pasaje de ida a Buenos Aires.", en: "I have a one-way ticket to Buenos Aires." },
  { category: "Tickets", es: "Mi pasaje es para hoy a la tarde.", en: "My ticket is for this afternoon. / My flight is this afternoon." },
  { category: "Tickets", es: "Tengo un pasaje de ida y vuelta a Londres.", en: "I have a round-trip ticket to London. / I have a return ticket to London." },
  { category: "Tickets", es: "Ella necesita un pasaje de ida a Nueva York.", en: "She needs a one-way ticket to New York." },
  { category: "Tickets", es: "Si compras ida y vuelta es más barato.", en: "If you buy a round-trip ticket it's cheaper. / Round-trip tickets are cheaper." },
  { category: "Tickets", es: "Mi avión sale a las 3.", en: "My plane leaves at 3. / My flight departs at 3." },
  { category: "Tickets", es: "Tengo que estar allí 20 minutos antes.", en: "I have to be there 20 minutes early. / I have to be there 20 minutes before." },
  { category: "Tickets", es: "Tengo pasaje en una buena aerolínea, en primera clase.", en: "I have a ticket with a good airline, in first class." },
  { category: "Tickets", es: "Compré un pasaje en segunda clase, es más barato.", en: "I bought a ticket in economy class, it's cheaper. / I bought a second-class ticket, it's cheaper." },

  // ---------- AT THE AIRPORT ----------
  { category: "At the Airport", es: "Este aeropuerto es enorme, estoy perdido.", en: "This airport is huge, I'm lost." },
  { category: "At the Airport", es: "Necesito ayuda para encontrar el lugar.", en: "I need help finding the place. / I need help to find the place." },
  { category: "At the Airport", es: "Disculpe señor, no sé dónde ir.", en: "Excuse me sir, I don't know where to go." },
  { category: "At the Airport", es: "¿Dónde debería ir?", en: "Where should I go?" },
  { category: "At the Airport", es: "¿Dónde deberíamos esperar?", en: "Where should we wait?" },
  { category: "At the Airport", es: "¿Dónde tenemos que abordar el avión?", en: "Where do we have to board the plane? / Where do we board the plane?" },
  { category: "At the Airport", es: "Tenemos que esperar en esta fila.", en: "We have to wait in this line. / We have to wait in this queue." },
  { category: "At the Airport", es: "Tenemos que hacer fila aquí.", en: "We have to line up here. / We have to queue here." },
  { category: "At the Airport", es: "¿Es esta la fila para Buenos Aires?", en: "Is this the line for Buenos Aires? / Is this the queue for Buenos Aires?" },

  // ---------- BAGGAGE ----------
  { category: "Baggage", es: "Tenemos que dejar nuestro equipaje aquí, sólo podemos tener un equipaje de mano.", en: "We have to leave our luggage here, we can only have one carry-on. / We have to check our bags here, we can only take one carry-on." },
  { category: "Baggage", es: "El equipaje de mano no puede ser muy pesado.", en: "Carry-on luggage can't be too heavy. / The carry-on can't be very heavy." },
  { category: "Baggage", es: "El equipaje de mano debe ser liviano.", en: "Carry-on luggage must be light. / The carry-on has to be light." },
  { category: "Baggage", es: "Cuidado con eso por favor, no lo rompas.", en: "Be careful with that please, don't break it." },
  { category: "Baggage", es: "Cuidado con eso por favor, es importante.", en: "Be careful with that please, it's important." },

  // ---------- DELAYS AND CANCELLATIONS ----------
  { category: "Delays and Cancellations", es: "El vuelo está retrasado.", en: "The flight is delayed." },
  { category: "Delays and Cancellations", es: "El vuelo está retrasado 2 horas.", en: "The flight is delayed by 2 hours. / The flight is 2 hours late." },
  { category: "Delays and Cancellations", es: "Vamos por un café mientras esperamos.", en: "Let's get a coffee while we wait." },
  { category: "Delays and Cancellations", es: "¿A qué hora es el nuevo horario de partida?", en: "What time is the new departure time? / What's the new departure time?" },
  { category: "Delays and Cancellations", es: "El nuevo horario de partida es en una hora.", en: "The new departure time is in an hour." },
  { category: "Delays and Cancellations", es: "El vuelo fue cancelado, tomaremos el próximo avión.", en: "The flight was canceled, we'll take the next plane. / The flight was cancelled, we'll take the next flight." },
  { category: "Delays and Cancellations", es: "El vuelo fue cancelado porque hay una tormenta.", en: "The flight was canceled because there's a storm. / The flight was cancelled due to a storm." },

  // ---------- BOARDING ----------
  { category: "Boarding", es: "Es hora de abordar el avión.", en: "It's time to board the plane." },
  { category: "Boarding", es: "Están llamando a los pasajeros para abordar.", en: "They're calling passengers to board. / They're calling for boarding." },
  { category: "Boarding", es: "Todos los pasajeros deben ir a la puerta 7.", en: "All passengers must go to gate 7." },
  { category: "Boarding", es: "Esa es nuestra puerta, vamos.", en: "That's our gate, let's go." },

  // ---------- IN A HURRY ----------
  { category: "In a Hurry", es: "Disculpe, necesitamos pasar.", en: "Excuse me, we need to get through. / Excuse me, we need to pass." },
  { category: "In a Hurry", es: "Nuestro vuelo sale en 10 minutos.", en: "Our flight leaves in 10 minutes." },
  { category: "In a Hurry", es: "Estamos apurados.", en: "We're in a hurry." },
  { category: "In a Hurry", es: "No podemos hacer fila.", en: "We can't wait in line. / We can't queue." },
  { category: "In a Hurry", es: "Perderemos el vuelo.", en: "We'll miss the flight." },
  { category: "In a Hurry", es: "Por favor, haga una excepción.", en: "Please make an exception." },

  // ---------- PASSPORT AND IDENTIFICATION ----------
  { category: "Passport and Identification", es: "¿Necesitas ver mi pasaporte? Aquí tienes.", en: "Do you need to see my passport? Here you go. / Do you need to see my passport? Here it is." },
  { category: "Passport and Identification", es: "¿Necesitas ver mi identificación? Aquí tienes.", en: "Do you need to see my ID? Here you go. / Do you need to see my identification? Here it is." },
  { category: "Passport and Identification", es: "Eso no es mío.", en: "That's not mine." },
  { category: "Passport and Identification", es: "Este equipaje no es mío.", en: "This luggage isn't mine. / This bag isn't mine." },
  { category: "Passport and Identification", es: "No sé quién lo dejó ahí.", en: "I don't know who left it there." },
  { category: "Passport and Identification", es: "Alguien lo dejó ahí.", en: "Someone left it there." },
  { category: "Passport and Identification", es: "No fui yo.", en: "It wasn't me." },
  { category: "Passport and Identification", es: "Mis cosas están aquí.", en: "My things are here." },
  { category: "Passport and Identification", es: "Yo sólo tengo este equipaje.", en: "I only have this bag. / I only have this luggage." },
  { category: "Passport and Identification", es: "Esto es mío.", en: "This is mine." },

  // ---------- SEATS ----------
  { category: "Seats", es: "Tenemos los asientos número 45 y 46.", en: "We have seats 45 and 46. / Our seats are numbers 45 and 46." },
  { category: "Seats", es: "Disculpe señor, usted está en nuestros asientos.", en: "Excuse me sir, you're in our seats." },
  { category: "Seats", es: "Revise el pasaje.", en: "Check the ticket. / Check your boarding pass." },
  { category: "Seats", es: "Quiero el asiento de la ventana, me gusta ver las nubes.", en: "I want the window seat, I like watching the clouds." },

  // ---------- DURING THE FLIGHT ----------
  { category: "During the Flight", es: "El vuelo está a punto de empezar ahora, tenemos que estar listos.", en: "The flight is about to start now, we have to be ready." },
  { category: "During the Flight", es: "El vuelo está a punto de empezar, tenemos que estar en nuestros asientos.", en: "The flight is about to start, we have to be in our seats." },
  { category: "During the Flight", es: "El piloto está hablando.", en: "The pilot is speaking. / The pilot is talking." },
  { category: "During the Flight", es: "Tenemos que prestar atención.", en: "We have to pay attention." },
  { category: "During the Flight", es: "¿Entendiste eso?", en: "Did you understand that?" },
  { category: "During the Flight", es: "¿Entendiste lo que dijo?", en: "Did you understand what he said?" },
  { category: "During the Flight", es: "Él dijo algo importante.", en: "He said something important." },
  { category: "During the Flight", es: "Dijo que tenemos que apagar los celulares.", en: "He said we have to turn off our phones. / He said we have to switch off our cell phones." },
  { category: "During the Flight", es: "Dijo que tenemos que abrocharnos los cinturones.", en: "He said we have to fasten our seat belts." },
  { category: "During the Flight", es: "¡Abrochate el cinturón!", en: "Fasten your seat belt! / Buckle up!" },

  // ---------- FLIGHT ATTENDANT ----------
  { category: "Flight Attendant", es: "Esa mujer es la azafata en este avión.", en: "That woman is the flight attendant on this plane." },
  { category: "Flight Attendant", es: "¿Disculpe señorita, puedo hacerle una pregunta?", en: "Excuse me miss, can I ask you a question?" },
  { category: "Flight Attendant", es: "¿Cuándo podemos pararnos?", en: "When can we stand up?" },
  { category: "Flight Attendant", es: "¿Podemos pararnos ahora?", en: "Can we stand up now?" },
  { category: "Flight Attendant", es: "¿Puede avisarme?", en: "Can you let me know? / Can you notify me?" },
  { category: "Flight Attendant", es: "La azafata me avisará.", en: "The flight attendant will let me know." },
  { category: "Flight Attendant", es: "La azafata me avisará cuándo podemos pararnos.", en: "The flight attendant will let me know when we can stand up." },

  // ---------- ARRIVAL AND CUSTOMS ----------
  { category: "Arrival and Customs", es: "Es hora de bajar del avión.", en: "It's time to get off the plane. / It's time to deplane." },
  { category: "Arrival and Customs", es: "Tenemos que bajar e ir por nuestro equipaje.", en: "We have to get off and go get our luggage. / We have to deplane and get our bags." },
  { category: "Arrival and Customs", es: "Esperá, no podemos bajar aún.", en: "Wait, we can't get off yet." },
  { category: "Arrival and Customs", es: "Disculpe señor, no puedo encontrar mi equipaje.", en: "Excuse me sir, I can't find my luggage. / Excuse me sir, I can't find my bag." },
  { category: "Arrival and Customs", es: "Es roja.", en: "It's red." },
  { category: "Arrival and Customs", es: "Debería estar aquí.", en: "It should be here." },
  { category: "Arrival and Customs", es: "Creo que la aerolínea cometió un error.", en: "I think the airline made a mistake." },
  { category: "Arrival and Customs", es: "La aerolínea la perdió.", en: "The airline lost it." },
  { category: "Arrival and Customs", es: "Tenemos que pasar por la aduana.", en: "We have to go through customs." },
  { category: "Arrival and Customs", es: "Tenemos que responder algunas preguntas en la aduana.", en: "We have to answer some questions at customs." },
  { category: "Arrival and Customs", es: "Tenemos que declarar el dinero que traemos.", en: "We have to declare the money we're bringing." },
  { category: "Arrival and Customs", es: "No podemos llevar más de 10.000 dólares en efectivo.", en: "We can't bring more than $10,000 in cash." },
  { category: "Arrival and Customs", es: "Listo, terminamos con la aduana.", en: "Done, we're finished with customs. / All set, we're done with customs." },
  { category: "Arrival and Customs", es: "Ahora podemos ir a la salida del aeropuerto y tomar un taxi.", en: "Now we can go to the airport exit and take a taxi." },
  { category: "Arrival and Customs", es: "¿Dónde está la salida?", en: "Where's the exit? / Where is the exit?" }
];
