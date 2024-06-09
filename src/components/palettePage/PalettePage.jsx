import CodePanel from './../../components/codePanel/CodePanel'
import Collection from './../../components/collection/Collection';
import ColorPanel from './../../components/colorPanel/ColorPanel';
import logo from './../../img/logo.png';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import "react-color-palette/dist/css/rcp.css";
import ExampleMaket from './../../components/exampleMaket/ExampleMaket';
import generateShadeColor from './../../helpers/generateShadeColor';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import createPalette from './../../api/createPalette';
import getPaletteById from './../../api/getPaletteById';
import { useParams} from 'react-router';
import "./PalettePage.css"


function PalettePage(){

    const [data, setData] = useState({});
    const [theme, setTheme] = useState('light');
    const [lng, setLng] = useState('ru');
    const [open, setOpen] = useState(false);
    const [collection, setCollection] = useState([]);
    const [selectedPalette, setSelectedPalette] = useState(null);
    const { t } = useTranslation();
    const [ids, setIds] = useState(() => localStorage.getItem("ids").split(","));
    let { paletteId } = useParams();

    const [colors, setColors] = useState({
        primary: '#1c3da0',
        secondary: '#b73333',
        tertiary: '#af3393',
        quaternary: '#dae019',
      })
      
      
      let extraColors = Object.entries(colors).map(([name, hex]) => {
          return(
            {
              name,
              light: generateShadeColor(hex, 20),
              normal: hex ,
              dark: generateShadeColor(hex, -20)
            }
          )
      }) 

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
        
        
      }, []);

      useEffect(()=>{
        if(paletteId){
            getPaletteById([paletteId])
            .then((palettes)=> {
                if(palettes[0]== undefined){
                    return
                }
                const {id, ...palette} = palettes[0];
                setColors(palette)

            })
        }
      }, [paletteId]);

      useEffect(() => {
        async function fetchPalette(){
          const result = await getPaletteById(ids);
          if(!result){
            return
          }
          setCollection(result);
        }
        fetchPalette();
        localStorage.setItem("ids", ids.join(","))
        
      }, [ids]);
    
    
      const saveCollection = async function(colors) {
    
        setCollection([{colors}, ...collection]);
        const result = await createPalette(colors);
        setIds([result.id, ...ids]);
        toast.success(t('app.save'));
      }
    
      const deletePalette = (id) => {
        setIds(ids.filter(item => item != id))
        toast.error(t('app.delete'), {icon: '🗑️'});
      }
    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    
        
      };
    
      const changeLng = () => {
        const newLng = lng === 'ru' ? 'en' : 'ru';
        i18next.changeLanguage(newLng)
        setLng(newLng);
      }
    
      const openCollection = () => {
        setOpen(true);
      }
      
      const closeCollection = () => {
        setOpen(false);
      }
    
    
      const selectPalette = (id, colors) => {
        setSelectedPalette(id);
        setColors(colors)
        window.history.pushState(null, null, `http://localhost:3000/palettes/${id}`);
      }

    return(
        <div className={theme === 'dark' ? 'dark-theme App' : 'App'}>
      <header className="App-header">
        <div>
          <img className='logo' src={logo} alt='' style={{ background: colors.primary,}}></img>
        </div>

        
          <div className='switch-title'>{t('app.lng')}</div>
          <div class={lng === 'en' ? "switch-btn switch-on::after" : "switch-btn switch-on"} 
          style={{background: lng === 'en' ? colors.secondary: colors.quaternary}}
        onClick={changeLng}></div>
        

        
          <div className='switch-title' >{t('app.theme')}</div>
          <div class={theme === 'dark' ? "switch-btn switch-on::after" : "switch-btn switch-on"}
           onClick={toggleTheme}
           style={{background: theme === 'dark' ? colors.primary: colors.tertiary}}></div>
       

        <button onClick={() => saveCollection(colors)}>{t('app.bt-save')}</button>
        <button onClick={openCollection}>{t('app.bt-collection')}</button>
      </header>
      <Collection isOpen={open}
        closeCollection={closeCollection}
        selectPalette={selectPalette}
        collection={collection}
        selectedPalette={selectedPalette}
        deletePalette={deletePalette}></Collection>
      <section className='section-select-color'>
      
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel colors={colors} setColors={setColors} theme={theme}></ColorPanel>
            
          </div>
        </div>

        <div className='code-panel'>
          <CodePanel extraColors={extraColors} theme={theme}></CodePanel>
        </div>

      </section>
      <section className='section-maket'>
        <ExampleMaket 
          extraColors = {extraColors}></ExampleMaket>
      </section>


    </div>
    );
}

export default PalettePage;