import styles from './Header.module.css'


let Header = () => {
    return(
        <div id = 'topDiv'>
                <div id = 'locationAndDate' class = 'LocationAndDate'> </div>
                <div id = {styles.location}> Санкт-Петербург, ул. Репещева, д. 20. </div>
                <h2 class = {styles.DateTime}> Date </h2>
                <div class = {styles.LongLineCustom}> </div>
                <a href="home" id = {styles.homeRef}>
                    <img class = {styles.Img} src={('./img/home.svg')}/>
                </a>
                <a href="load" id = {styles.loadRef}>
                    <img class = {styles.Img} src={('./img/download.svg')}/>
                </a>
        </div>
    )
}

export default Header