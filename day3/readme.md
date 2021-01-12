*Ajax is the way to communicate with server
*How they communicate using HTTP request
*Because http is the medium to call ajax
*Ajax run on client side
<!------------------------------------------------------------------------------>
*Ajax is the way to communicate with server
#But how browser and server are interacting ?
#What is the language used by the client to communicate with the server?
#How does the two system(client system and server system) communicates?
#What is the medium?
#How they are talking?

===> HTTP(STANDARD,LANGUAGE,PROTOCOL)

Whenever you are calling server, in url there is HTTP 
1.HTTP IS THE MEDIUM,
2.HTTP IS THE STANDARD,
3.HTTP IS A PROTOCOL(APPLICATION LAYER PROTOCOL)
4.DEFAULT PROTOCOL OF THE WEB
5.SECURED HTTP
6.language understand by the http ==> TEXT
7.HTTP DO NOT UNDERSTAND THE JSON AND XML 
8.Data transfers over the web from one device to another device in the text format.
9.HTTP is the set of methods

   <!-- a.GET(default method) -->
      -GET the maximum information from server with minimum information.
      -Information are send in URL
      -LIMITATION-1:-Length of the URL is limited
      -LIMITATION-2:-URL is READABLE :: CONCERN :: SECURITY CONSTRAINT
      -LIMITATION-3:-Only TEXT information, Binary Data LIMITATION(IMG,MP3,MP4)

   <!-- b.POST -->
       -It does not pass information in URL (HTTP BODY)
       -No lenght limitation.
       -SECURITY issue.
       -Support Binary Data.

   c.PUT
   d.DELETE

   Using all of the above we are exchanging the information.
   Common purpose of http ->we are exchanging the information between client and server either with GET or POST.
   
<!--------------------------------------------------------------------------------->
Whenever the client is exchanging some information it use httprequest
Whenever the server is exchanging some information it use httprespond
<!--------------------------------------------------------------------------------->

Proper way to send the information from client to server or server to client(we need to understand http)

network->
headers->


<!-- Study URL -->

https://www.google.com/    :: URL WITHOUT INFORMATION     

https://www.google.com:80/search?q=java&oq=java&   :: URL WITH INFORMATION SENT BY CLIENT

https://drive.google.com/

https:/mail.google.com:80/abcd/?a=b&c=d



-SEPARATOR:-
-> ://       Between Protocol and Domain
-> .         Between Domain Name and Extension
-> :         Between Domain and Port
-> /         Between path Parameter
-> ?         Query Separator (Optional)
-> & (=)     

e.g ? key1=value1&key2=value2&key3=value3

1. Https   => Protocol
2. www     =>
3. google  => Domain
4. com     => Domain extension
5. .80     => Default port of web (: is the separator between Domain and Port number)
6. /search =>Path Parameter 

# SUBMITTING A FORM
- Username email ans Password
- https://www.google.com/form?username=mean&password=12345&email=abcd@gmail.com

# Weather API
-52363b607cda0d6a4b407d6a472a67a2

https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=52363b607cda0d6a4b407d6a472a67a2


