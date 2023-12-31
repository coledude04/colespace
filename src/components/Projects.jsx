import React from 'react';
import screener from '/src/images/screener.png';
import bookProject from '/src/images/bookProject.png';
import PERanker from '/src/images/PERanker.png';
import sectorSorter from '/src/images/sectorSorter.png';

const ProjCard = (props) => {
    return (
        <div className="projCard">
            <h3 className="projTitle">{props.title}</h3>
            <img src={props.imgSrc} className="projPic"></img>
            <p className="projDesc">{props.desc}</p>
            <input type="button" className="projBtn" value="View Project" />
        </div>
    )
}

const Projects = () => {
    return (
        <div className="projSection">
            <h2 id="projectsTitle">Projects</h2>
            <div className="projCards">
                <ProjCard title="Stock Screener" imgSrc={screener} desc="A GUI made in python using TKinter, Yahoo Finance, and pandas. It sorts stocks based on user input and gets data with API's and web-scraping." />
                <ProjCard title="Book File Holder" imgSrc={bookProject} desc="A GUI made with JavaFX that allows a user to add books with a title, author, and genre. The GUI takes advantage of the JavaFX TableView." />   
                <ProjCard title="PE Ratio Ranker" imgSrc={PERanker} desc="A Python program that scans all the stocks in the NASDAQ and NYSE and calculates the average and current PE Ratio for each. It then compares them." />   
                <ProjCard title="Sector Sorter" imgSrc={sectorSorter} desc="A GUI made with python and TKinter. This GUI allows the user to select sectors to view stocks from and values to display for each stock." />
            </div>
        </div>
    );

}

export default Projects;