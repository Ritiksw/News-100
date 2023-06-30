import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// articles = [
//   {
//     source: { id: null, name: "CNBC" },
//     author: "Hannah Ward-Glenton",
//     title: "European markets higher as traders digest ECB rate hike - CNBC",
//     description:
//       "European stock markets were higher on Friday as traders digest the ECB's decision to raise interest rates.",
//     url: "https://www.cnbc.com/2023/06/16/european-markets-open-to-close-earnings-data-and-news.html",
//     urlToImage:
//       "https://image.cnbcfm.com/api/v1/image/107258026-1686893404637-gettyimages-1258709924-20090101230615-99-67588.jpeg?v=1686893776&w=1920&h=1080",
//     publishedAt: "2023-06-16T08:38:00Z",
//     content:
//       "More countries are reducing their reliance on China, and India could be the next best bet for nations looking to move their manufacturing operations, said Matthew Culley, portfolio manager at Janus H… [+758 chars]",
//   },
//   {
//     source: { id: "cnn", name: "CNN" },
//     author: "Barbie Latza Nadeau,Helen Regan",
//     title:
//       "Pope Francis discharged from hospital in Rome following surgery - CNN",
//     description:
//       "Pope Francis was set to be discharged from Rome’s Gemelli hospital Friday where the 86-year-old was recovering from abdominal surgery.",
//     url: "https://www.cnn.com/2023/06/16/europe/pope-francis-discharged-hospital-surgery-intl-hnk/index.html",
//     urlToImage:
//       "https://media.cnn.com/api/v1/images/stellar/prod/230616024851-01-pope-francis-leaves-hospital-061623.jpg?c=16x9&q=w_800,c_fill",
//     publishedAt: "2023-06-16T07:11:00Z",
//     content:
//       "Pope Francis was discharged from Romes Gemelli hospital Friday where the 86-year-old was recovering from abdominal surgery, after the procedure sparked renewed concerns over his health.\r\nThe Pontiff … [+3527 chars]",
//   },
//   {
//     source: { id: null, name: "CNBC" },
//     author: "Lim Hui Jie",
//     title:
//       "Asia markets trade higher as Bank of Japan leaves rates unchanged, in line with expectations - CNBC",
//     description:
//       "Investors in Asia also will be looking to the Bank of Japan's rate decision, scheduled to be announced Friday",
//     url: "https://www.cnbc.com/2023/06/16/asia-markets.html",
//     urlToImage:
//       "https://image.cnbcfm.com/api/v1/image/107257944-1686871334383-gettyimages-1258302640-JAPAN_BOJ.jpeg?v=1686873160&w=1920&h=1080",
//     publishedAt: "2023-06-16T07:06:00Z",
//     content:
//       "Singapore's non-oil domestic exports slid 14.7% year-on-year in May, a larger fall than the 9.8% decrease in April and more than the 8.1% drop expected by economists polled by Reuters.\r\nThe May figur… [+737 chars]",
//   },
//   {
//     source: { id: "cnn", name: "CNN" },
//     author: "Sara Smart",
//     title: "At least 15 dead in Canada highway collision - CNN",
//     description:
//       "At least 15 people have died after a truck collided with a bus carrying senior citizens in a rural portion of Canada’s Manitoba province on Thursday afternoon, according to local authorities.",
//     url: "https://www.cnn.com/2023/06/15/americas/canada-highway-collision-intl-latam/index.html",
//     urlToImage:
//       "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill",
//     publishedAt: "2023-06-16T06:57:00Z",
//     content:
//       "At least 15 people have died after a truck collided with a bus carrying senior citizens in a rural portion of Canadas Manitoba province on Thursday afternoon, according to local authorities.\r\nThe bus… [+1868 chars]",
//   },
//   {
//     source: { id: "reuters", name: "Reuters" },
//     author: null,
//     title:
//       "US grand jury indicts Pentagon leak suspect Teixeira, Justice Department says - Reuters.com",
//     description:
//       "A federal grand jury has indicted a U.S. Air National Guardsman accused of leaking top-secret military intelligence records online, the Justice Department said in a statement on Thursday.",
//     url: "https://www.reuters.com/legal/us-grand-jury-indicts-pentagon-leak-suspect-teixeira-justice-department-says-2023-06-15/",
//     urlToImage:
//       "https://www.reuters.com/resizer/Wo8qg_774dcXRTHd47ASZMK4hko=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DWALBOJ5O5M6DBPAMSS3C3WXZ4.jpg",
//     publishedAt: "2023-06-16T06:14:00Z",
//     content:
//       "WASHINGTON, June 15 (Reuters) - A federal grand jury has indicted a U.S. Air National Guardsman accused of leaking top-secret military intelligence records online, the Justice Department said in a st… [+2212 chars]",
//   },
//   {
//     source: { id: null, name: "CBS Sports" },
//     author: "Chuck Booth",
//     title:
//       "USMNT dominate Mexico 3-0: Chaos reigns with four red cards as USA advances to Concacaf Nations League final - CBS Sports",
//     description:
//       "A game that the Americans dominated ended in chaos with red cards and an early end thanks to a homophobic chant",
//     url: "https://www.cbssports.com/soccer/news/usmnt-dominate-mexico-3-0-chaos-reigns-with-four-red-cards-as-usa-advances-to-concacaf-nations-league-final/live/",
//     urlToImage:
//       "https://sportshub.cbsistatic.com/i/r/2023/06/16/829fbc89-7c37-40d2-8060-b6b62c6a7d6a/thumbnail/1200x675/26a43ff078fbf3e3503633798bb4ad58/untitled-design-2023-06-16t000414-123.png",
//     publishedAt: "2023-06-16T05:52:00Z",
//     content:
//       "After an absolutely wild affair, the Concacaf Nations League final is set as the United States will face Canada after defeating Mexico 3-0 in Las Vegas on Thursday night. It was a match that ended ea… [+2632 chars]",
//   },
//   {
//     source: { id: null, name: "The Athletic" },
//     author: "The Athletic Staff",
//     title:
//       "Heat investigating allegations of Conor McGregor sexually assaulting woman during Game 4 of NBA Finals - The Athletic",
//     description:
//       '"We are aware of the allegations and are conducting a full investigation," the Heat said.',
//     url: "https://theathletic.com/4613825/2023/06/15/conor-mcgregor-sexual-assault-nba-finals/",
//     urlToImage:
//       "https://cdn.theathletic.com/app/uploads/2020/06/07140113/GettyImages-1200439651-1024x685.jpg",
//     publishedAt: "2023-06-16T04:21:35Z",
//     content:
//       "Content warning: This story includes allegations of sexual assault that may be difficult to read and emotionally upsetting.\r\nThe Miami Heat are investigating allegations that UFC star Conor McGregor … [+2506 chars]",
//   },
//   {
//     source: { id: "cnn", name: "CNN" },
//     author: "Sandee LaMotte",
//     title:
//       "Night owls may die younger, but more than sleep is to blame - CNN",
//     description:
//       "Going to bed late, also known as being a night owl, was linked to increased use of alcohol and tobacco and early death, a new study found.",
//     url: "https://www.cnn.com/2023/06/16/health/night-owl-early-death-wellness/index.html",
//     urlToImage:
//       "https://media.cnn.com/api/v1/images/stellar/prod/230615171259-night-owl-early-death-wellness-restricted.jpg?c=16x9&q=w_800,c_fill",
//     publishedAt: "2023-06-16T04:01:00Z",
//     content:
//       "Editors Note: Sign up for CNNs Sleep, But Better newsletter series. Our seven-part guide has helpful hints to achieve better sleep.\r\nPeople who prefer to go to bed and get up later a sleep chronotype… [+5784 chars]",
//   },
//   {
//     source: { id: null, name: "SciTechDaily" },
//     author: null,
//     title:
//       "NASA Power Play: Astronauts Finish Installing Roll-Out Solar Array in Record-Tying Spacewalk - SciTechDaily",
//     description:
//       "NASA astronauts, Woody Hoburg and Steve Bowen, successfully installed a new solar array on the International Space Station during a 5-hour spacewalk, boosting power production. This marked Bowen's tenth spacewalk, tying the record for most U.S. spacewalks. Ex…",
//     url: "https://scitechdaily.com/nasa-power-play-astronauts-finish-installing-roll-out-solar-array-in-record-tying-spacewalk/",
//     urlToImage:
//       "https://scitechdaily.com/images/Spacewalker-Woody-Hoburg-Rides-the-Canadarm2-Robotic-Arm-scaled.jpg",
//     publishedAt: "2023-06-16T03:58:41Z",
//     content:
//       "ByNASAJune 15, 2023\r\nA view of the new roll-out solar array unfolding after NASA astronauts Steve Bowen and Woody Hoburg successfully installed it to the 1B power channel on June 15, 2023. Credit: NA… [+4419 chars]",
//   },
//   {
//     source: { id: null, name: "BBC News" },
//     author: "https://www.facebook.com/bbcnews",
//     title:
//       "Richard Branson: Virgin Galactic commercial space flights to start this month - BBC",
//     description:
//       "It comes just weeks after a separate space firm owned Sir Richard, Virgin Orbit, was shut down.",
//     url: "https://www.bbc.com/news/business-65924495",
//     urlToImage:
//       "https://ichef.bbci.co.uk/news/1024/branded_news/15A54/production/_130106688_richardbranson-1.jpg",
//     publishedAt: "2023-06-16T03:50:24Z",
//     content:
//       "Sir Richard Branson's space tourism company Virgin Galactic says it will launch its first commercial flight before the end of this month.\r\nThe firm is targeting a launch window for the flight, which … [+2508 chars]",
//   },
//   {
//     source: { id: "independent", name: "Independent" },
//     author: "Abe Asher",
//     title:
//       "Trump declared 'food for all' at Miami cafe – but skipped the bill - The Independent",
//     description:
//       "The former president visited the restaurant after being arraigned on federal charges",
//     url: "https://www.independent.co.uk/news/world/americas/us-politics/trump-food-for-everyone-miami-versailles-b2358666.html",
//     urlToImage:
//       "https://static.independent.co.uk/2023/06/14/02/Trump_Classified_Documents_25524.jpg?quality=75&width=1200&auto=webp",
//     publishedAt: "2023-06-16T03:48:02Z",
//     content:
//       "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nWhen former President Donald Trump visited the iconic Ve… [+2349 chars]",
//   },
//   {
//     source: { id: "independent", name: "Independent" },
//     author: "Jacob Stolworthy",
//     title:
//       "Glenda Jackson gave her two Oscars to her mother, who found another use for them - The Independent",
//     description:
//       "Two-time Academy Award winner didn’t attend either ceremony, where she was nominated for Best Actress",
//     url: "https://www.independent.co.uk/arts-entertainment/films/news/glenda-jackson-died-oscars-mother-b2358659.html",
//     urlToImage:
//       "https://static.independent.co.uk/2023/06/15/13/newFile-2.jpg?quality=75&width=1200&auto=webp",
//     publishedAt: "2023-06-16T03:30:57Z",
//     content:
//       "Get our free weekly email for all the latest cinematic news from our film critic Clarisse Loughrey\r\nGet our The Life Cinematic email for free\r\nGlenda Jackson is one of just a relatively small number … [+1696 chars]",
//   },
//   {
//     source: { id: null, name: "The Philadelphia Inquirer" },
//     author: "Jonathan Tannenwald",
//     title:
//       "Gregg Berhalter set to return as USMNT manager, reports say - The Philadelphia Inquirer",
//     description:
//       "An announcement of the next full-time manager could come as soon as Friday morning.",
//     url: "https://www.inquirer.com/soccer/jesse-marsch-usmnt-coach-patrick-vieira-20230615.html",
//     urlToImage:
//       "https://www.inquirer.com/resizer/-VCZfptN403x0MtroZgCST7Tkwg=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/UVMCTXF35RGWTA4XBR2BRSB5OE.jpg",
//     publishedAt: "2023-06-16T03:15:50Z",
//     content: null,
//   },
//   {
//     source: { id: "cnn", name: "CNN" },
//     author: "Jennifer Gray,Dave Alsup,Sara Smart",
//     title:
//       "Help rushes in to Perryton, Texas, after tornado rips through community - CNN",
//     description:
//       "The state of Texas as well as cities and counties surrounding the Panhandle town of Perryton are sending aid after a deadly tornado ripped through the area Thursday afternoon.",
//     url: "https://www.cnn.com/2023/06/15/weather/severe-weather-south-thursday/index.html",
//     urlToImage:
//       "https://media.cnn.com/api/v1/images/stellar/prod/230615073514-weather-severe-threat-thursday.jpg?c=16x9&q=w_800,c_fill",
//     publishedAt: "2023-06-16T03:11:15Z",
//     content:
//       "The state of Texas as well as cities and counties surrounding the Panhandle town of Perryton are sending aid after a deadly tornado ripped through the area Thursday afternoon.\r\nAt least three people … [+7106 chars]",
//   },
//   {
//     source: { id: null, name: "The Guardian" },
//     author: "Ewan Murray",
//     title:
//       "Fowler and Schauffele hit 62s at US Open to etch names into golfing folklore - The Guardian",
//     description:
//       "The American duo post 62s to set record pace at US Open and join Branden Grace as only golfers in history to achieve the feat",
//     url: "https://www.theguardian.com/sport/2023/jun/15/fowler-and-schauffele-hit-62s-at-us-open-to-etch-names-into-golfing-folklore",
//     urlToImage:
//       "https://i.guim.co.uk/img/media/5512ee53cee9977966bd3d204e5c54e32facd7e6/0_115_4578_2747/master/4578.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fc5637fac23726f87b407db7d9d64fc3",
//     publishedAt: "2023-06-16T02:40:00Z",
//     content:
//       "Jack Nicklaus never managed it. Neither did Tiger Woods. Arnold Palmer, Ben Hogan, Sam Snead, Seve Ballesteros the list goes on.\r\nLuminaries of this sport have come and gone without ever posting 62 a… [+9860 chars]",
//   },
//   {
//     source: { id: "associated-press", name: "Associated Press" },
//     author: "Ajit Solanki, Sibi Arasu",
//     title:
//       "Wind-driven rain pelts shores of India, Pakistan as Cyclone Biparjoy pushes into coast - The Associated Press",
//     description:
//       "MANDVI, India (AP) — Wind-driven rain pelted the shores of western India and southern Pakistan as Cyclone Biparjoy pushed into the coast with the potential for a significant storm surge and flash floods from heavy rain.",
//     url: "https://apnews.com/article/cyclone-biparjoy-landfall-gujarat-india-pakistan-5f783577358f579cbfc8ff37c3737771",
//     urlToImage:
//       "https://storage.googleapis.com/afs-prod/media/30ff29c66ee148d997f3162f2b7f6375/3000.webp",
//     publishedAt: "2023-06-16T01:41:15Z",
//     content:
//       "MANDVI, India (AP) Wind-driven rain pelted the shores of western India and southern Pakistan as Cyclone Biparjoy pushed into the coast with the potential for a significant storm surge and flash flood… [+4519 chars]",
//   },
//   {
//     source: { id: null, name: "New York Post" },
//     author: "Steven Nelson",
//     title:
//       "Hunter Biden associate Devon Archer in talks to dish about alleged $10 million bribe from Ukraine - New York Post ",
//     description:
//       "“We are in contact with his attorney to schedule it for another date,” a committee aide said.",
//     url: "https://nypost.com/2023/06/15/hunter-biden-associate-devon-archer-to-dish-on-10-million-bribe/",
//     urlToImage:
//       "https://nypost.com/wp-content/uploads/sites/2/2023/06/hunter-comp-1.jpg?quality=75&strip=all&w=1024",
//     publishedAt: "2023-06-16T01:13:00Z",
//     content:
//       "WASHINGTON Former Hunter Biden business partner Devon Archer is in talks with the House Oversight Committee to testify about his knowledge of the first family’s business dealings in countries includi… [+2664 chars]",
//   },
//   {
//     source: { id: null, name: "KABC-TV" },
//     author: null,
//     title:
//       "Asylum seekers bused from Texas given support in Los Angeles; local leaders call out Republican governor Greg Abbott - KABC-TV",
//     description:
//       "Southern California agencies and nonprofits have stepped in to assist the 42 migrants bused here from Texas as state officials say criminal charges will be investigated in the case.",
//     url: "https://abc7.com/texas-greg-abbott-buses-migrants-los-angeles/13387074/",
//     urlToImage:
//       "https://cdn.abcotvs.com/dip/images/13387128_061523-kabc-md-asylum-seekers-vid.jpg?w=1600",
//     publishedAt: "2023-06-16T01:10:07Z",
//     content:
//       "LOS ANGELES (KABC) -- Southern California agencies and nonprofits have stepped in to help the 42 migrants -- 10 of whom are minors -- who arrived in L.A. from Texas on Wednesday as state officials sa… [+4792 chars]",
//   },
//   {
//     source: { id: null, name: "Variety" },
//     author: "Matt Donnelly",
//     title:
//       "New Batman Film ‘Brave and the Bold’ Lands ‘The Flash’ Director Andy Muschietti (EXCLUSIVE) - Variety",
//     description:
//       "Andy Muschietti is officially suiting up to direct a new Batman film, Variety can report exclusively. The film is one of several new DC Studios titles mapped out by leaders James Gunn and Peter Saf…",
//     url: "https://variety.com/2023/film/news/brave-and-the-bold-andy-muschietti-directing-batman-film-the-flash-1235646262/",
//     urlToImage:
//       "https://variety.com/wp-content/uploads/2023/06/muschietti-batman-brave-bold-split-2.jpg?w=1000&h=562&crop=1",
//     publishedAt: "2023-06-16T01:05:00Z",
//     content:
//       "Andy Muschietti is officially suiting up to direct a new Batman film, Variety can report exclusively. The film is one of several new DC Studios titles mapped out by leaders James Gunn and Peter Safra… [+2269 chars]",
//   },
//   {
//     source: { id: null, name: "YouTube" },
//     author: null,
//     title:
//       "E. Jean Carroll defamation suit against Trump scheduled for January - CNN",
//     description: null,
//     url: "https://www.youtube.com/watch?v=y8ng8cB7S1Q",
//     urlToImage: null,
//     publishedAt: "2023-06-16T00:58:53Z",
//     content:
//       "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
//   },
// ];
export class News extends Component {
  constructor() {
    super();
    console.log("constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1d086a1f61fa4c50ac41d1c7b1aeccdd&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("prev clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1d086a1f61fa4c50ac41d1c7b1aeccdd&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    console.log("next clicked");
    if (!(this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1d086a1f61fa4c50ac41d1c7b1aeccdd&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  
  };


  render() {
    return (
      <div className="container my-2 text-center ">
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?.slice(0, 45) + "..."}
                  description={element.description?.slice(0, 88) + "..."}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
