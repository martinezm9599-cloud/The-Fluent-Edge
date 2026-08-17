/*
  TAXI — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.TAXI_DATA = [
  // ---------- CALLING A TAXI ----------
  { category: "Calling a Taxi", es: "Necesito tomar un taxi.", en: "I need to take a taxi." },
  { category: "Calling a Taxi", es: "¿Dónde puedo encontrar un taxi?", en: "Where can I find a taxi?" },
  { category: "Calling a Taxi", es: "Lo espero.", en: "I'll wait for it." },
  { category: "Calling a Taxi", es: "Lo espero en la esquina.", en: "I'll wait for it on the corner." },
  { category: "Calling a Taxi", es: "Estoy con una campera azul.", en: "I'm wearing a blue jacket." },
  { category: "Calling a Taxi", es: "Envíelo a la tienda al lado del banco.", en: "Send it to the store next to the bank." },
  { category: "Calling a Taxi", es: "¿Puede enviar el auto a esta dirección, por favor?", en: "Can you send the car to this address, please?" },
  { category: "Calling a Taxi", es: "Te envío la dirección por WhatsApp.", en: "I'll send you the address on WhatsApp." },
  { category: "Calling a Taxi", es: "Disculpe, pedí un taxi hace media hora.", en: "Excuse me, I ordered a taxi half an hour ago." },
  { category: "Calling a Taxi", es: "Y el auto no vino.", en: "And the car never came." },
  { category: "Calling a Taxi", es: "Envíe otro, estoy esperando.", en: "Send another one, I'm waiting." },
  { category: "Calling a Taxi", es: "Quiero cancelar el taxi, conseguiré otro, gracias.", en: "I want to cancel the taxi, I'll get another one, thanks." },

  // ---------- DURING THE RIDE ----------
  { category: "During the Ride", es: "Disculpe, chofer.", en: "Excuse me, driver." },
  { category: "During the Ride", es: "No puedo abrir la puerta, ¿puede abrirla desde adentro?", en: "I can't open the door, can you open it from inside?" },
  { category: "During the Ride", es: "¿Puede llevar 5 pasajeros?", en: "Can you take 5 passengers?" },
  { category: "During the Ride", es: "Somos 4 pasajeros.", en: "There are 4 of us." },
  { category: "During the Ride", es: "¿Puedo abrir la ventana? Hace calor.", en: "Can I open the window? It's hot." },
  { category: "During the Ride", es: "¿Puedo cerrar la ventana? Hace frío.", en: "Can I close the window? It's cold." },

  // ---------- GIVING THE ADDRESS ----------
  { category: "Giving the Address", es: "Por favor, lléveme a esta dirección.", en: "Please take me to this address." },
  { category: "Giving the Address", es: "¿Conoce esa dirección?", en: "Do you know that address?" },
  { category: "Giving the Address", es: "A la estación de tren.", en: "To the train station." },
  { category: "Giving the Address", es: "¿Cuánto es hasta el centro?", en: "How much is it to downtown?" },
  { category: "Giving the Address", es: "Déjeme dos cuadras antes del parque.", en: "Drop me off two blocks before the park." },
  { category: "Giving the Address", es: "Al aeropuerto, por favor.", en: "To the airport, please." },
  { category: "Giving the Address", es: "¿Cuánto es hasta el aeropuerto?", en: "How much is it to the airport?" },
  { category: "Giving the Address", es: "Lléveme allí.", en: "Take me there." },

  // ---------- GIVING DIRECTIONS ----------
  { category: "Giving Directions", es: "Doble aquí, por favor.", en: "Turn here, please." },
  { category: "Giving Directions", es: "Doble en la siguiente calle / esquina.", en: "Turn at the next street / corner." },
  { category: "Giving Directions", es: "Doble a la izquierda en la próxima calle, por favor.", en: "Turn left at the next street, please." },
  { category: "Giving Directions", es: "Doble a la derecha en la siguiente esquina.", en: "Turn right at the next corner." },
  { category: "Giving Directions", es: "Siga derecho dos cuadras más.", en: "Keep going straight two more blocks." },
  { category: "Giving Directions", es: "No pare aquí, siga derecho.", en: "Don't stop here, keep going straight." },
  { category: "Giving Directions", es: "Tome esta calle hasta el supermercado.", en: "Take this street to the supermarket." },
  { category: "Giving Directions", es: "No tome esta calle, la siguiente, por favor.", en: "Don't take this street, the next one, please." },

  // ---------- MID-RIDE REQUESTS ----------
  { category: "Mid-Ride Requests", es: "Necesito pasar a buscar a una amiga / alguien.", en: "I need to pick up a friend / someone." },
  { category: "Mid-Ride Requests", es: "Ella está allí, en ese edificio.", en: "She's over there, in that building." },
  { category: "Mid-Ride Requests", es: "Me olvidé el celular.", en: "I forgot my phone." },
  { category: "Mid-Ride Requests", es: "Mi celular está en el hotel y necesito pasar a buscarlo.", en: "My phone is at the hotel and I need to go pick it up." },
  { category: "Mid-Ride Requests", es: "Lléveme de vuelta al hotel, por favor.", en: "Take me back to the hotel, please." },
  { category: "Mid-Ride Requests", es: "Pare aquí un minuto, por favor, necesito comprar algo.", en: "Stop here for a minute, please, I need to buy something." },
  { category: "Mid-Ride Requests", es: "Vuelvo en 5 minutos, no se vaya.", en: "I'll be back in 5 minutes, don't leave." },
  { category: "Mid-Ride Requests", es: "¿Puede esperarme aquí 10 minutos?", en: "Can you wait for me here for 10 minutes?" },
  { category: "Mid-Ride Requests", es: "Listo, podemos seguir.", en: "Ready, we can go." },
  { category: "Mid-Ride Requests", es: "Por favor, más rápido, estoy apurado.", en: "Please, faster, I'm in a hurry." },
  { category: "Mid-Ride Requests", es: "Estoy apurado, tome un camino corto.", en: "I'm in a hurry, take a short route." },
  { category: "Mid-Ride Requests", es: "Tome un camino más corto.", en: "Take a shorter route." },
  { category: "Mid-Ride Requests", es: "Tome el camino más corto.", en: "Take the shortest route." },
  { category: "Mid-Ride Requests", es: "Conduzca rápido.", en: "Drive fast." },
  { category: "Mid-Ride Requests", es: "Conduzca más rápido.", en: "Drive faster." },
  { category: "Mid-Ride Requests", es: "Tome un camino más barato.", en: "Take a cheaper route." },
  { category: "Mid-Ride Requests", es: "Tome el camino más barato.", en: "Take the cheapest route." },

  // ---------- PARKING & DROP-OFF ----------
  { category: "Parking & Drop-off", es: "Cambio de planes, me bajo aquí.", en: "Change of plans, I'll get off here." },
  { category: "Parking & Drop-off", es: "Me bajo en la siguiente cuadra.", en: "I'll get off at the next block." },
  { category: "Parking & Drop-off", es: "¿Puede dejarme en frente de la puerta?", en: "Can you drop me off in front of the door?" },
  { category: "Parking & Drop-off", es: "Déjeme en el semáforo.", en: "Drop me off at the traffic light." },
  { category: "Parking & Drop-off", es: "Por favor no estacione aquí, estacione en frente del banco.", en: "Please don't park here, park in front of the bank." },
  { category: "Parking & Drop-off", es: "Estacione en frente de esa casa.", en: "Park in front of that house." },
  { category: "Parking & Drop-off", es: "Estacione en frente de ese edificio.", en: "Park in front of that building." },

  // ---------- PAYMENT ----------
  { category: "Payment", es: "¿Cuánto es?", en: "How much is it?" },
  { category: "Payment", es: "Aquí tiene.", en: "Here you go." },
  { category: "Payment", es: "Quédese con el cambio.", en: "Keep the change." },
  { category: "Payment", es: "Quédese con el cambio, yo no lo necesito.", en: "Keep the change, I don't need it." },
  { category: "Payment", es: "No se preocupe por las monedas, es su propina.", en: "Don't worry about the coins, it's your tip." },
  { category: "Payment", es: "Quédese con las monedas.", en: "Keep the coins." },

  // ---------- BOOKING AHEAD ----------
  { category: "Booking Ahead", es: "¿Puedo pedir un auto para mañana?", en: "Can I book a car for tomorrow?" },
  { category: "Booking Ahead", es: "Quiero pedir un auto para mañana a las 8.", en: "I want to book a car for tomorrow at 8." },
  { category: "Booking Ahead", es: "¿Pueden pasar a buscarme a las 7 en este lugar?", en: "Can you pick me up at 7 at this spot?" },
  { category: "Booking Ahead", es: "Gracias por el viaje.", en: "Thanks for the ride." },
  { category: "Booking Ahead", es: "Disfrute el resto del día.", en: "Enjoy the rest of the day." },
  { category: "Booking Ahead", es: "Nos vemos mañana.", en: "See you tomorrow." },

  // ---------- LOST & FOUND ----------
  { category: "Lost & Found", es: "Buenas tardes, vengo porque ayer olvidé la billetera en un auto.", en: "Good afternoon, I'm here because I left my wallet in a car yesterday." },
  { category: "Lost & Found", es: "Tengo mis tarjetas adentro y algo de efectivo.", en: "I have my cards and some cash inside." },
  { category: "Lost & Found", es: "Lo necesito de vuelta.", en: "I need it back." },
  { category: "Lost & Found", es: "Si la encuentran, por favor llámenme.", en: "If you find it, please call me." }
];
