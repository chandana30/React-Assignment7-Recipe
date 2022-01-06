import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './header/Header';
import Recipeapp from './recipe/Recipeapp';
import Recipedetails from './RecipeDeatils/Recipedetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  const [recipe, setrecipe] = useState([
    {
        id: 1,
        recipeName: "Carrot Halwa",
        deatils: "Peel and grate the carrots using a hand grater (use the thicker side of the grater). Add the grated carrots to a pan and turn heat to medium-high.Stirring often, sauté the carrots for around 10 minutes until all the moisture dries out.  just dry roasting the carrot to remove the moisture.You will notice that the color of the carrot will change from red to orange at this point, that’s fine. Remove pan from heat and set it aside. To a heavy bottom pan, add milk. Please do use a heavy bottom pan here otherwise you will have trouble and the milk might burn. You can start this process of boiling the milk on the side when you are sautéing the carrots. With heat on medium-high, stir the milk often and let it come to a boil. I have used 1.25 liter (1250 ml) of milk here for 1 kg carrots, you can use anywhere between 1-1.5 liters. Once the milk comes to a boil, lower the heat to medium and let the milk boil and reduce until it reduces to at least half or a little bit more than half. Remember to stir very often else milk might get stuck to the bottom of the pan and burn.",
        image: "https://c.ndtvimg.com/2018-12/i618orl_winter-desserts-gajar-ka-halwa_625x300_03_December_18.jpg"
    },
    {
        id: 2,
        recipeName: " Aloo Tikki",
        deatils: "Firstly, in a large mixing bowl take 3 boiled and grated potato. make sure to pressure cook potatoes for 4-5 whistles and drain off the water as soon as pressure releases.add 1 chilli, 1 tsp ginger garlic paste, ¼ tsp turmeric and ½ tsp chilli powder.also add ½ tsp cumin powder, ½ tsp aamchur, ½ tsp chaat masala and ½ tsp salt,further add 2 tbsp mint and 2 tbsp coriander.now add 2 tbsp cornflour and mix well alternatively use poha powder or rice flour as it helps to absorb moisture.mix well forming a soft dough.grease hand with oil and prepare ball-sized tikki.shallow fry in hot oil. you can alternatively roast or deep fry.roast on low flame until it turns golden brown.flip over and cook on both sides.finally, enjoy aloo tikki with green chutney, tamarind chutney or prepare aloo tikki chaat..",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/aloo-tikki.jpg"
    },
    {
        id: 3,
        recipeName: "Gulab Jamun",
        deatils: "To make this simple Gulab jamun recipe, you need to take a vessel and add sugar, water and a slice of lemon. Mix the sugar syrup well and reduce the consistency to two-string. Then turn off the flame and let it attain normal room temperature.Take a wide tray and add equal proportions of chenna or paneer and khoya, mash them together using a masher. To accentuate the taste add some saffron strands. Make sure that there are no lumps in the mixture. Once the mixture is smooth enough, move on to the next step. Mix, all-purpose flour, cardamom powder, cornflour and baking powder in the khoya-paneer mixture. To make the gulab jamun more delicious, add some ghee to the mix. This will leave a nice aroma and give it an authentic taste.Now, rub some ghee in your palms and take some dough and shape them into small balls. In the meantime, put a kadhai over medium flame and heat oil for frying. Once the oil is hot enough, slowly slide the balls and let them cook. Wait till the balls turn golden brown in colour.Take out the balls and remove the excess oil, then gently leave the gulab jamun balls in the sugar syrup. Let the Gulab Jamuns absorb the syrup. After half an hour, extract them and place them in a bowl and gently pour some sugar syrup.Last, but not the least, garnish the gulab jamuns with some finely chopped pistachios. Serve these gulab jamuns after an elaborate and we are sure your guests will praise your culinary skills!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06OCgNFKMPR9-gfLOzgG8N-12pzJgjBFPdA&usqp=CAU"
    }
  ]);
  const [Data, setData] = useState([])

  let getData = (userClick)=>{
    setData(userClick)
  }
  return (
    <Router>
      
      <div className="App">
        <div className="row border border-secondary">
        <Header/>
        <br/>
        <div className="col-md-4">
        <Recipeapp data={recipe} getData={getData}/>
        </div><br/>
        <div className="col-md-7">
        <Recipedetails data={Data}/>
        </div>
        </div>
      </div>

      </Router>
  );
}

export default App;
