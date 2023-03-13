 // Maintaing a parallel array to keep track of the options selected(1) and unselected(0)
  const optionsPageThree = ['Marketing & Promotions', 'Internal Communications', 'Appontments & Remainders', 'Reviews', 'API & Devtools', 'Not Sure'];
  const optionsPageFour = ['Improve Sales', 'Collect reviews', 'Integration', 'Generate leads', 'Catch enquires', 'Other'];
  const selectedStates = [0, 0, 0, 0, 0, 0];

  // Storing the selected options title. Final list of selected options, that can be sent to backed to do filtering. 
  let selectedOptionsPageThree = [];
  let selectedOptionsPageFour = [];

  // Querying for the options, and getting their list
  const optionsListPageThree = document.querySelectorAll('.options-container-three .option');
  const optionsListPageFour = document.querySelectorAll('.options-container-four .option');

  // For each of the options from optionsList, adding a 'click' event listener to run a funciton each time an option is clicked.
  optionsListPageThree.forEach((option, i) => option.addEventListener('click', function (e) {

    // get the value of the clicked option
    const clicked = option.value;


    // Wasn't selected before. Now is. So, store the answer.
    if (!selectedStates[i]) {
      // Update the selected state of the current option to 1
      selectedStates[i] = 1;

      // Store the selected option
      selectedOptionsPageThree.push(optionsPageThree[i]);

      // Add the active class
      option.classList.add('active');


    } else if (selectedStates[i]) { // Has been selected before. Remove the answer and the selectedState

      // Update the selected state of the current option to 0
      selectedStates[i] = 0;

      // Remove the selected option
      selectedOptionsPageThree = [...selectedOptionsPageThree.filter(el => el !== selectedOptionsPageThree[i])];

      // Remove the active class
      option.classList.remove('active');
    }
  }));

  //same process for page 4
  optionsListPageFour.forEach((option, i) => option.addEventListener('click', function (e) {

    // get the value of the clicked option
    const clicked = option.value;


    // Wasn't selected before. Now is. So, store the answer.
    if (!selectedStates[i]) {
      // Update the selected state of the current option to 1
      selectedStates[i] = 1;

      // Store the selected option
      selectedOptionsPageFour.push(optionsPageFour[i]);

      // Add the active class
      option.classList.add('active');


    } else if (selectedStates[i]) { // Has been selected before. Remove the answer and the selectedState

      // Update the selected state of the current option to 0
      selectedStates[i] = 0;

      // Remove the selected option
      selectedOptionsPageFour = [...selectedOptionsPageFour.filter(el => el !== selectedOptionsPageFour[i])];

      // Remove the active class
      option.classList.remove('active');
    }
  }));



  $(".form-step").css("display", "none")
  $("#form_step_1").css("display", "block");


  function run(hideTab, showTab, btnclass) {
    console.log(hideTab, showTab);
    if (hideTab < showTab) { //if press next button
      //validation
      // var currentTab = 0;
      // x = $("#form_step_" + hideTab);
      // y = $(x).find("input");  

      // for(i = 0; i < y.length; i++){
      //   if(y[i].value == ""){
      //     $(y[i]).css("background", "#ffdddd");
      //     return false;
      //   }
      // }
    }

    //switch tab
    $("#form_step_" + hideTab).css("display", "none");
    $("#form_step_" + showTab).css("display", "block");
    if (btnclass == 'nextcls') {
      $(".form_step_" + hideTab).addClass("complete");
    }
    if (btnclass == 'prevcls') {
      $(".form_step_" + showTab).removeClass("complete");
    }
    $("input").css("background", "#fff")
  }

  $('#industry').change(function () {
    let selected = $(this).val();

    if (selected === 'other') {
      $('.specify-others').css('display', 'flex')
    } else {
      $('.specify-others').css('display', 'none')
    }
  });