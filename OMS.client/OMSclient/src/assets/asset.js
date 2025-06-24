import img2 from "./IMG-20250108-WA0016.jpg";
import cpr from "./cpr.jpg";
import Hydration from "./hydration.jpg";
import Exercise from "./Exercise.jpg";
import Sleep from "./sleep.jpg";
import De_stress from "./de-stress.jpg";






const reels = [
    {
        title: "CPR",
        subTitle: ">Save a drowning person<",
        img: cpr,
        meaning: "Cardiopulmonary resuscitation (CPR) is a lifesaving emergency procedure that involves chest compressions and artificial ventilation to help a person who is not breathing or has a stopped heart"
    },
    {
        title: "Hydration",
        subTitle: ">Stay hydrated<",
        img: Hydration,
        meaning: "Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Being well-hydrated also improves sleep quality, cognition, and mood"
    },
    {
        title: "Exercise",
        subTitle: ">Daily Exercise<",
        img: Exercise,
        meaning: "Exercise is one of the best ways to maintain good health and keep your body in top shape. It has been shown to reduce stress, improve moods and cognitive function, lower blood pressure and cholesterol levels, help prevent obesity, increase bone density and flexibility, enhance joint range of motion"
    },
    {
        title: "De-stress",
        subTitle: ">Meaningful De-stress<",
        img: De_stress,
        meaning: "There are a number of ways to reduce physical tension. These include meditation, exercise, tai chi, massage, visualisation, yoga, progressive muscle relaxation, and slow breathing techniques. To reduce our stress it is important that we practice relaxation techniques on a daily basis"
    },
    {
        title: "Sleep",
        subTitle: ">Good Sleep<",
        img: Sleep,
        meaning: "During sleep, your body is working to support healthy brain function and maintain your physical health. In children and teens, sleep also helps support growth and development. Getting inadequate sleep over time can raise your risk for chronic (long-term) health problems"
    },
]





const assets = { 
  img2, cpr, reels
 };

export default assets;