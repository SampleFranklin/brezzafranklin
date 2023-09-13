export default async function decorate(block) {
    const anchorTag = block.querySelector(':scope > div > div > a');
    const queryURI = anchorTag.getAttribute("href");

    console.log(block);
    console.log(queryURI);
    const response = await fetch(queryURI);
    const jsonData = await response.json();
    const variantsList = jsonData.data.carVariantsList.items;

    const variantDetailsDiv = document.createElement('div');
    variantDetailsDiv.classList.add("variant-details","swiper-wrapper");

    variantsList.forEach(item => {
        const variantCardDiv = document.createElement('div');
        variantCardDiv.classList.add("variant-card","swiper-slide");

        // Decorating card-top div
        const cardTopDiv = document.createElement('div');
        cardTopDiv.classList.add("card-top");

        const cardImgTag = document.createElement('img');
        cardImgTag.classList.add('variant-img');
        cardImgTag.src = item.imageUrl._publishUrl;
        cardImgTag.alt = item.variant_name;

        const variantShareSection = document.createElement('div');
        variantShareSection.classList.add("variant-share-section");
        
        const variantShareText = document.createElement('p');
        variantShareText.classList.add("variant-share-text");
        variantShareText.innerText = "Share";

        const topSellingContainer = document.createElement('div');
        topSellingContainer.classList.add("top-selling-container");
        const topSellingText = document.createElement('p');
        topSellingText.classList.add("top-selling-text");
        topSellingText.innerText = "Top Selling";

        topSellingContainer.appendChild(topSellingText);
        variantShareSection.appendChild(variantShareText);
        variantShareSection.appendChild(topSellingContainer);

        cardTopDiv.appendChild(cardImgTag);
        cardTopDiv.appendChild(variantShareSection);

        // Decorating variant-desc div
        const variantDescDiv = document.createElement('div');
        variantDescDiv.classList.add("variant-desc");

        const variantTitle = document.createElement('p');
        variantTitle.classList.add("variant-title");
        variantTitle.innerText = item.carName; // To be added

        // Fetch Price
        const variantPriceSection = document.createElement('div');
        variantPriceSection.classList.add("variant-price-section");

        const variantPrice = document.createElement('p')
        variantPrice.classList.add("variant-price");
        variantPrice.innerText = "₹ "+item.ex_price;

        const variantPriceText = document.createElement('p')
        variantPriceText.classList.add("variant-price-text");
        variantPriceText.innerText = "Ex-showroom, "+item.ex_location;
        
        variantPriceSection.appendChild(variantPrice);
        variantPriceSection.appendChild(variantPriceText); // To be added

        const variantFeature = document.createElement('p')
        variantFeature.classList.add("variant-feature");
        variantFeature.innerText = "Features"; // To be added

        // Fetch Features;
        const variantFeatureUl = document.createElement('ul')
        variantFeatureUl.classList.add("variant-feature-ul");

        const featuresList = item._metadata.stringArrayMetadata[0];
        if(featuresList){
            for(var feature of featuresList.value){
                const variantFeatureList = document.createElement('li');
                variantFeatureList.classList.add("variant-feature-list");

                const variantFeatureText = document.createElement('p');
                variantFeatureText.classList.add("variant-feature-text");

                var newStr = feature.slice(feature.indexOf("/")+1);
                var words = newStr.split("-");
                var capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
                var resultString = capitalizedWords.join(" ");
                
                variantFeatureText.innerText = resultString;
                variantFeatureList.appendChild(variantFeatureText);

                variantFeatureUl.appendChild(variantFeatureList); // to be added.
            }
            
        }

        // Buttons - (Book a Test Drive) & (VIEW FULL SPECIFICATIONS) 
        const buttonTestDrive = document.createElement('button');
        buttonTestDrive.classList.add("test-drive-btn");
        const testDriveLink = document.createElement('a');
        testDriveLink.href = "https://www.marutisuzuki.com/";
        testDriveLink.innerText = "Book a Test Drive";
        buttonTestDrive.appendChild(testDriveLink); // To be added

        const buttonSpecification = document.createElement('button');
        buttonSpecification.classList.add("specification-btn");
        const specificationLink = document.createElement('a');
        specificationLink.href = "https://www.marutisuzuki.com/";
        specificationLink.innerText = "VIEW FULL SPECIFICATIONS";
        buttonSpecification.appendChild(specificationLink); // To be added

        // Add to Compare CTA
        const compareCTA = document.createElement('div');
        compareCTA.classList.add("compare-cta");

        const compareInput = document.createElement('input');
        compareInput.type = "checkbox";
        compareInput.id = "compareIt";
        compareInput.name = "compare";
        compareInput.value = "compare";

        const uncheckedLabel = document.createElement('label');
        uncheckedLabel.for = "compareIt"
        uncheckedLabel.classList.add("unchecked");
        uncheckedLabel.innerText = "Add to Compare";

        const checkedLabel = document.createElement('label');
        checkedLabel.for = "compareIt"
        checkedLabel.classList.add("checked");
        checkedLabel.innerText = "Added to Compare";

        compareCTA.appendChild(compareInput);
        compareCTA.appendChild(uncheckedLabel);
        compareCTA.appendChild(checkedLabel); // To be added
        
        variantDescDiv.appendChild(variantTitle);
        variantDescDiv.appendChild(variantPriceSection);
        variantDescDiv.appendChild(variantFeature);
        variantDescDiv.appendChild(variantFeatureUl);
        variantDescDiv.appendChild(buttonTestDrive);
        variantDescDiv.appendChild(buttonSpecification);
        variantDescDiv.appendChild(compareCTA);

        // add to main
        variantCardDiv.appendChild(cardTopDiv);
        variantCardDiv.appendChild(variantDescDiv);
        variantDetailsDiv.appendChild(variantCardDiv);
    });

    // block.classList.add("swiper-wrapper");
    const parentDiv = block.querySelector(':scope > div');
    parentDiv.replaceWith(variantDetailsDiv);

    const swiper = new Swiper(".recommendedvariants-container .recommendedvariants", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        watchSlidesProgress: true,
        spaceBetween: "27px",
        breakpoints: {
          390: {
            slidesPerView: 1,
          },
          1023:{
            slidesPerView: 3,
          }
        },
      });
}

