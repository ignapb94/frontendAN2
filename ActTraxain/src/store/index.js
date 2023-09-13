import { proxy } from 'valtio';

const state = proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture: true,
    isFullTexture:true,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    isMobile:true,
    isbackImageLoaded:false,
    rollindDir:1,
    showModal:false


});

export default state;