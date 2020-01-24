/* target_element = document.getElementById(id_element + 1);
                    if (target_element.classList[1] !== "hidden") {
                        target_element.classList.add("hidden");
                        target_element.classList.add(1);
                    } else if (target_element.classList[1] == "hidden"){
                        if (parseInt(target_element.classList[2])  >= 1){
                            element_count = parseInt(target_element.classList[2])+element_count;
                            console.log(element_count);
                            let hidden_element = document.getElementById(id_element+element_count)
                            hidden_element.classList.add("hidden");
                            hidden_element.classList.add(element_count);
                        }
                    } 
                    if (id_element !== 1){
                        target_element = document.getElementById(id_element - 1);
                        if (target_element.classList[1] !== "hidden") {
                            target_element.classList.add("hidden")
                        } else if (target_element.classList[1] == "hidden"){
                            alert("No square detected")
                        }
                    }
                    */