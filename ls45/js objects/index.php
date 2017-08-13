<html>
<head>
</head>
<body>
    <script>
        'use strict'
        var a = '<?php echo '[{"name": "name1", "age":15},{"name": "sharlok", "age":45},{"name": "pnini", "age":27},{"name": "bertok", "age":67}]'; ?>';
        var b = JSON.parse(a);

        var personsArray = [];
        for (let i=0; i < b.length; i++) {
            personsArray.push(new Person(b[i].name, b[i].age));
        }      
          
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // var p5 = Person('a', 3); //writing to Global object - lack of new
        
        var p1 = new Person('3', 3);
        console.log(p1);

        console.log(personsArray);

       

        function h(a, b, c) {

            return a+b+c;
        }


        var y = {
            b: 15
         };
         console.log(y.b);
         delete y.b;
         console.log(y.b);


         Object.defineProperty(y, 'a', {
            writable: false,
            configurable: false,
            value: 5,
            enumerable: true  
        });
        // delete y.a; //cannot delete if configurable: false
        console.log('a: ' + y.a);
        // y.a = 10; //can't- writeable false
        console.log(y);

        y.firstName = "Avram";
        y.lastName = "Danino";

        Object.defineProperty(y, 'fullName', {
            get: function() { return this.firstName + " " + this.lastName; },
            set: function(y) { 
                this.firstName = y.split(' ')[0];
                this.lastName = y.split(' ')[1];
             }
        });

        y.fullName = "Avram Nagosa";

       
        console.log(y.fullName);


        for (var i in y) {
             if (y.hasOwnProperty(i)) {
                console.log(i + ": " + y[i]);
             }
        }
 


    </script>
</body>
</html>
