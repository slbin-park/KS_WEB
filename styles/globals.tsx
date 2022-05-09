import { type } from 'os';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
import { Type } from 'typescript';

const Globals = {
    palette:{
        // 키 컬러
        $color_low : '#8492A7',
        $color_base : '#6A86B3',
        $color_middle : '#336BC5',
        $color_high : '#1261DF',

        // 회색
        $color_gray : '#f0f3f5',
        
        // 검은색
        $color_bloack : '#262626',
    }
};
export default Globals;