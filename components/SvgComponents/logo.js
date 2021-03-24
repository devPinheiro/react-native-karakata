import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={145} height={75} viewBox="0 0 145 75" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.316 49.416A17.438 17.438 0 0055 37.5c0-5.141-2.217-9.765-5.747-12.967L38.472 35.664l11.844 13.752zm-1.66 1.568L36.84 37.44l-7.536 7.728v7.798A17.423 17.423 0 0037.5 55c4.24 0 8.128-1.508 11.156-4.017zm-21.8.408C22.687 48.193 20 43.16 20 37.5s2.687-10.693 6.856-13.892v27.784zm2.448-29.358V42l18.269-18.812A17.42 17.42 0 0037.5 20c-2.961 0-5.751.736-8.196 2.034z"
          fill="#fff"
        />
      </G>
      <Path
        d="M62.768 36.376c1.552 0 2.744.4 3.576 1.2.832.784 1.248 1.944 1.248 3.48V49H66.44v-2.232a4.242 4.242 0 01-1.752 1.728c-.768.4-1.688.6-2.76.6-1.392 0-2.496-.328-3.312-.984-.8-.656-1.2-1.52-1.2-2.592 0-1.04.368-1.88 1.104-2.52.752-.656 1.944-.984 3.576-.984h4.296v-1.008c0-1.168-.32-2.056-.96-2.664-.624-.608-1.544-.912-2.76-.912a6.78 6.78 0 00-2.4.432c-.752.288-1.392.672-1.92 1.152l-.6-.864c.624-.56 1.376-.992 2.256-1.296.88-.32 1.8-.48 2.76-.48zm-.672 11.736c1.04 0 1.92-.24 2.64-.72.736-.48 1.288-1.176 1.656-2.088v-2.352H62.12c-1.232 0-2.128.224-2.688.672-.544.448-.816 1.064-.816 1.848 0 .816.304 1.464.912 1.944.608.464 1.464.696 2.568.696zm11.592-8.904c.384-.912.984-1.608 1.8-2.088.816-.496 1.808-.744 2.976-.744v1.176l-.288-.024c-1.392 0-2.48.44-3.264 1.32-.784.864-1.176 2.072-1.176 3.624V49h-1.2V36.472h1.152v2.736zm12.306-2.832c1.552 0 2.745.4 3.576 1.2.833.784 1.249 1.944 1.249 3.48V49h-1.153v-2.232a4.242 4.242 0 01-1.751 1.728c-.769.4-1.689.6-2.76.6-1.392 0-2.496-.328-3.313-.984-.8-.656-1.2-1.52-1.2-2.592 0-1.04.368-1.88 1.105-2.52.752-.656 1.944-.984 3.576-.984h4.296v-1.008c0-1.168-.32-2.056-.96-2.664-.625-.608-1.544-.912-2.76-.912a6.78 6.78 0 00-2.4.432c-.752.288-1.392.672-1.92 1.152l-.6-.864c.624-.56 1.376-.992 2.255-1.296.88-.32 1.8-.48 2.76-.48zm-.671 11.736c1.04 0 1.92-.24 2.64-.72.736-.48 1.288-1.176 1.656-2.088v-2.352h-4.272c-1.232 0-2.128.224-2.688.672-.544.448-.817 1.064-.817 1.848 0 .816.305 1.464.912 1.944.608.464 1.465.696 2.569.696zm14.904-5.808l-3.264 2.976V49h-1.2V31.192h1.2v12.6l8.016-7.32h1.536l-5.4 5.064L107.043 49h-1.488l-5.328-6.696zm13.635-5.928c1.552 0 2.744.4 3.576 1.2.832.784 1.248 1.944 1.248 3.48V49h-1.152v-2.232a4.242 4.242 0 01-1.752 1.728c-.768.4-1.688.6-2.76.6-1.392 0-2.496-.328-3.312-.984-.8-.656-1.2-1.52-1.2-2.592 0-1.04.368-1.88 1.104-2.52.752-.656 1.944-.984 3.576-.984h4.296v-1.008c0-1.168-.32-2.056-.96-2.664-.624-.608-1.544-.912-2.76-.912a6.78 6.78 0 00-2.4.432c-.752.288-1.392.672-1.92 1.152l-.6-.864c.624-.56 1.376-.992 2.256-1.296.88-.32 1.8-.48 2.76-.48zm-.672 11.736c1.04 0 1.92-.24 2.64-.72.736-.48 1.288-1.176 1.656-2.088v-2.352h-4.272c-1.232 0-2.128.224-2.688.672-.544.448-.816 1.064-.816 1.848 0 .816.304 1.464.912 1.944.608.464 1.464.696 2.568.696zm16.656.096a3.132 3.132 0 01-1.152.672c-.448.144-.92.216-1.416.216-1.088 0-1.928-.296-2.52-.888-.592-.608-.888-1.448-.888-2.52v-8.184h-2.304v-1.032h2.304v-2.736h1.2v2.736h3.984v1.032h-3.984v8.064c0 .816.192 1.44.576 1.872.4.416.984.624 1.752.624.784 0 1.432-.232 1.944-.696l.504.84zm7.57-11.832c1.552 0 2.744.4 3.576 1.2.832.784 1.248 1.944 1.248 3.48V49h-1.152v-2.232a4.242 4.242 0 01-1.752 1.728c-.768.4-1.688.6-2.76.6-1.392 0-2.496-.328-3.312-.984-.8-.656-1.2-1.52-1.2-2.592 0-1.04.368-1.88 1.104-2.52.752-.656 1.944-.984 3.576-.984h4.296v-1.008c0-1.168-.32-2.056-.96-2.664-.624-.608-1.544-.912-2.76-.912a6.78 6.78 0 00-2.4.432c-.752.288-1.392.672-1.92 1.152l-.6-.864c.624-.56 1.376-.992 2.256-1.296.88-.32 1.8-.48 2.76-.48zm-.672 11.736c1.04 0 1.92-.24 2.64-.72.736-.48 1.288-1.176 1.656-2.088v-2.352h-4.272c-1.232 0-2.128.224-2.688.672-.544.448-.816 1.064-.816 1.848 0 .816.304 1.464.912 1.944.608.464 1.464.696 2.568.696z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent