// Check for valid name input (no numbers allowed)
function check(name) {
        var new_name = name.value;
    
        if (!isNaN(new_name)) {
            new_name = new_name.substring(0, (new_name.length - 1));
            name.value = new_name;
        }
    }
    
    // FLAMES calculation logic
    function calc() {
        // Get names from the user
        var fname = document.getElementById('yname').value;
        var sname = document.getElementById('pname').value;
    
        // Validate if names are entered
        if (fname == '') {
            alert("Enter First Name");
        } else if (sname == '') {
            alert("Enter Second Name");
        } else {
            var r = /\s+/g;
            var orfirst = document.first.name.value.toUpperCase();
            var nam = orfirst;
            orfirst = orfirst.replace(r, "");
            if (orfirst != "") {
                var count = 0;
                var first = orfirst;
                var second = eval("document.first.name" + 1).value.toUpperCase();
                var names = second;
                second = second.replace(r, "");
                if (second != "") {
                    document.getElementById("result").style.display = 'block';
                    for (var i = 0; i < first.length; i++) {
                        for (var j = 0; j < second.length; j++) {
                            if (first[i] == second[j]) {
                                var a1 = first.substring(0, i);
                                var a2 = first.substring(i + 1, first.length);
                                first = a1 + a2;
                                i = -1;
                                var b1 = second.substring(0, j);
                                var b2 = second.substring(j + 1, second.length);
                                second = b1 + b2;
                                j = -1;
                                break;
                            }
                        }
                    }
    
                    var ss = (first + second);
                    var l = ss.length;
                    var ar = new Array("F", "L", "A", "M", "E", "S");
                    var stp = 1;
    
                    for (var x = 6; x > 1; x--) {
                        var g = ((l % x) + stp) - 1;
                        if (g > x) {
                            g = g % x;
                        }
                        if (g == 0) {
                            g = ar.length;
                        }
                        ar.splice(g - 1, 1);
                        stp = g;
                    }
    
                    // Display result based on the flame calculation
                    if (ar == "F") {
                        document.getElementById("display_flame").innerHTML = 'FRIENDS';
                        document.getElementById("display_flame").style.color = 'blue';
                    } else if (ar == "L") {
                        document.getElementById("display_flame").innerHTML = 'LOVER';
                        document.getElementById("display_flame").style.color = '#FF0080';
                    } else if (ar == "A") {
                        document.getElementById("display_flame").innerHTML = 'AFFECTION';
                        document.getElementById("display_flame").style.color = '#DBA901';
                    } else if (ar == "M") {
                        document.getElementById("display_flame").innerHTML = 'MARRIAGE';
                        document.getElementById("display_flame").style.color = 'green';
                    } else if (ar == "E") {
                        document.getElementById("display_flame").innerHTML = 'ENEMY';
                        document.getElementById("display_flame").style.color = 'red';
                    } else if (ar == "S") {
                        document.getElementById("display_flame").innerHTML = 'SISTER';
                        document.getElementById("display_flame").style.color = 'violet';
                    }
    
                    document.getElementById("nam1").style.display = 'block';
                    document.getElementById("nam1").textContent = "Relationship status of " + nam + " & " + names + " is :";
                } else {
                    document.getElementById("nam1").style.display = 'none';
                    count++;
                    if (count == 4) {
                        alert("Enter other name");
                        document.getElementById("result").style.display = 'block';
                    }
                }
            } else {
                return false;
            }
        }
    }
    
