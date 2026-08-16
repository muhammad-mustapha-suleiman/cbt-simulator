const mathematics = [
    {id:1,topic:"Algebra",difficulty:"Easy",question:"Solve for x: 2x + 5 = 15",options:["3","5","10","7"],answer:1,explanation:"2x = 15 - 5 = 10, so x = 10/2 = 5."},
    {id:2,topic:"Algebra",difficulty:"Medium",question:"Simplify: 3(x - 4) = 21",options:["7","9","11","13"],answer:2,explanation:"3x - 12 = 21, so 3x = 33, giving x = 11."},
    {id:3,topic:"Geometry",difficulty:"Medium",question:"What is the area of a circle with radius 7 cm? (Use pi = 22/7)",options:["154 cm2","44 cm2","49 cm2","22 cm2"],answer:0,explanation:"Area = pi r^2 = 22/7 x 7 x 7 = 154 cm2."},
    {id:4,topic:"Geometry",difficulty:"Easy",question:"How many degrees are in the interior angles of a triangle?",options:["90","180","270","360"],answer:1,explanation:"The interior angles of any triangle sum to 180 degrees."},
    {id:5,topic:"Number Theory",difficulty:"Easy",question:"Which of the following is a prime number?",options:["21","27","29","33"],answer:2,explanation:"29 is divisible only by 1 and itself, making it prime."},
    {id:6,topic:"Fractions",difficulty:"Easy",question:"Evaluate: 3/4 + 1/8",options:["7/8","1/2","5/8","4/12"],answer:0,explanation:"3/4 = 6/8, so 6/8 + 1/8 = 7/8."},
    {id:7,topic:"Algebra",difficulty:"Hard",question:"Factorize: x^2 - 5x + 6",options:["(x-2)(x-3)","(x-1)(x-6)","(x+2)(x+3)","(x-6)(x+1)"],answer:0,explanation:"We need two numbers that multiply to 6 and add to -5: -2 and -3."},
    {id:8,topic:"Statistics",difficulty:"Medium",question:"Find the mean of: 4, 8, 6, 5, 3, 10",options:["5.5","6.0","6.5","7.0"],answer:1,explanation:"Sum = 36, count = 6, mean = 36/6 = 6.0."},
    {id:9,topic:"Trigonometry",difficulty:"Medium",question:"What is sin(30 degrees)?",options:["0","1/2","1","sqrt(3)/2"],answer:1,explanation:"sin(30 degrees) is a standard value equal to 1/2."},
    {id:10,topic:"Indices",difficulty:"Medium",question:"Simplify: 2^3 x 2^4",options:["2^7","2^12","4^7","2^1"],answer:0,explanation:"When multiplying powers with the same base, add the exponents: 3+4=7."},
    {id:11,topic:"Sets",difficulty:"Easy",question:"If A = {1,2,3} and B = {2,3,4}, what is A intersect B?",options:["{1,2,3,4}","{2,3}","{1,4}","{}"],answer:1,explanation:"The intersection contains elements common to both sets: 2 and 3."},
    {id:12,topic:"Ratio",difficulty:"Easy",question:"Divide 60 in the ratio 2:3",options:["20 and 40","24 and 36","30 and 30","25 and 35"],answer:1,explanation:"Total parts = 5. 2/5 x 60 = 24, 3/5 x 60 = 36."},
    {id:13,topic:"Geometry",difficulty:"Medium",question:"Find the perimeter of a rectangle with length 12 cm and width 5 cm",options:["17 cm","34 cm","60 cm","24 cm"],answer:1,explanation:"Perimeter = 2(l + w) = 2(12+5) = 34 cm."},
    {id:14,topic:"Number Bases",difficulty:"Hard",question:"Convert 101101 (base 2) to base 10",options:["43","45","47","41"],answer:1,explanation:"101101(2) = 32+0+8+4+0+1 = 45 in base 10."},
    {id:15,topic:"Percentages",difficulty:"Easy",question:"What is 15% of 200?",options:["15","20","30","45"],answer:2,explanation:"15% of 200 = 0.15 x 200 = 30."}
  ];