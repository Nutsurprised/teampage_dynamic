(() => {
    // variables / DOM connections go here
      let sigils = document.querySelectorAll('.sigilContainer'),
          employeeName = document.querySelector('.employee-name'),
          employeeInfo = document.querySelector('.employee-desc'),
          bannerImages = document.querySelector('#employeeImages');

      const employeeData = [
          [`andy`, `He is the company’s chef, creates the fantastic menu for breakfast and lunch which our employees enjoy from his diverse palate. He likes to do jujitsu and swim during his free time.`], // index 0 => employeeData[0][0], employeeData[0][1]
          [`ashley`, `She is the project manager and lends her people skills, as well as technical skills in a complimentary way to the team. Her leadership has extended beyond the company culture, as she likes to organize fund raisers in her free time to help the homeless youth in London, ON.`], // index 1
          [`beth`, `A hardworking team member, her savvy coding in JavaScript has enabled our website to have such interactive functionality. During her free time, she likes to crochet and enjoys a good BBQ with friends!`], // index 2
          [`bill`, `His roots are in Ukraine but his eye for design colors our entire company website with beautiful artistry. He loves hiking with his dogs and enjoys playing the guitar in his free time.`], // index 3
      ];

      function showemployeeData() {
          //debugger;
          // show the right employee info on a sigil click
          // this refers to the shield you clicked on
          // this.dataset.offset is the data-offset attribute defined on that html tag
          employeeName.textContent = employeeData[this.dataset.offset][0].toUpperCase();
          employeeInfo.textContent = employeeData[this.dataset.offset][1];

          // each banner image is 600 px wide, so multiply that by a numerator
          let animationTotal = 600 * this.dataset.offset;

          // actually change the CSS an animate the banner
          bannerImages.style.right = `${animationTotal}px`;

          console.log('move the banner images', animationTotal);
      }

      // event handling here (how is the user going to interact with stuff)
      sigils.forEach(sigil => sigil.addEventListener('click', showemployeeData));

  })();
  
