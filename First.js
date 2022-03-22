        function first(){
            alert("You Created Account thnks MR/Madam" );
            
        }






        function Second(){
            alert(print(Text.name))
        }

        function Greeting(Magac,Number,Country, Age){
            var Magac = prompt("what is Ur FullName :");
            var Number = prompt("what is Your Number phone :");
            var Country = prompt("where A U From :" );
            var Age = prompt("What is your Age :");
            alert("ASSALAMA'ALAYKUN  Your Name is  : "  + Magac );
            alert("YOUR PHONE IS : " + Number );
            alert("YOUR COUNTRY IS  : " +  Country);
            alert("YOUR AGE IS :" + Age);
            alert("BYE !")
        }
        function me(name,Age,Learn,Hoppy,Future){
            var name = prompt("Your name ? ");
            
            var Age = prompt(" what is Your Age   ?");
            var Learn =prompt("what do You Learning")
            var Hoppy = prompt("what is ur Hoppy");
            var Future = prompt("What is Your Dreams/Future");
            document.writeln("Hello My Name is : " + name);
            document.writeln("My age is :" + Age);
            document.writeln("i learn  :" + Learn);
            document.writeln("I interest :"+ Hoppy);
            document.writeln("i have More Futures Some Dreams  Include :" + Future);
        
            document.writeln(print(Text.name));
        }

        function Time(Now,image){
            var Now = prompt("ENTER TIME & WE EILL TELL YOU YOUR TABLE");
            if(Now >=6 && Now < 12) {
                alert("GOOD-MORNING ");

            
                document.writeln('<img src="./Morning1.png" width="950px">');

                
                        }
            else if (Now >=1 && Now < 3 ){
                alert("GOOD-NOON!");
                document.writeln('<img src="./Noon.png" width="1100px">');
            }
            else if(Now >= 3 && Now <=5 ){
                alert("GOOD-AFTERNOON");
                document.writeln('<img src="./Afternoon0.jpg" width="1250px"">');
            }
            else if(Now >= 18 && Now < 24){
                alert("GOOD-NIGHT");
                document.writeln('<img src="./Night.png">');
            }
        
            else {
                alert("Invalid");
            }
        }
        window.onload = function() {

            //Get a reference to the link on the page
            // with an id of "mylink"
            var a = document.getElementById("mylink");

            //Set code to run when the link is clicked
            // by assigning a function to "onclick"
            a.onclick = function() {

            // Your code here...

            //If you don't want the link to actually 
            // redirect the browser to another page,
            // "google.com" in our example here, then
            // return false at the end of this block.
            // Note that this also prevents event bubbling,
            // which is probably what we want here, but won't 
            // always be the case.
            return true;
            }
        }