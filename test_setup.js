{




    let {Builder, By} = require('selenium-webdriver');
    driver = new Builder().forBrowser('firefox').build();

    (async function test(){

//Navigate to url
        await driver.get('http://localhost:3000/shows');
        driver.manage().window().maximize();

        let searchBar = driver.findElement(By.name('search'));


        await searchBar.sendKeys('batman');

        let searchButton = driver.findElement(By.xpath('//i[@class="material-icons right"]'));
        await searchButton.click();
        let secondUrl = driver.findElement(By.xpath("//a[contains(@href, 'https://www.tvmaze.com/shows/19608/eat-man')]"));
        await secondUrl.click();


        driver.navigate().back();

        let backButton = driver.findElement(By.css(".btn"));
        await backButton.click();




       let test1 = searchBar.getValue("value");

        if(!test1 ){
            alert("input box is empty");
        }
        await driver.quit();


    })();


}