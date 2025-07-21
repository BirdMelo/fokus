import Svg, { Path, Circle} from 'react-native-svg'
import { colors } from '../Colors'

export const IconPlay = () => {
    return (
        <Svg width="11" height="15" viewBox="0 0 11 15" fill="none">
            <Path d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z" fill="#021123"/>
        </Svg>
    )
}
export const IconPause = () => {
    return (
        <Svg width="12" height="15" viewBox="0 0 12 15" fill="none">
            <Path d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z" fill="#021123"/>
        </Svg>
    )
}
export const IconCheck = ({ checked }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="12" fill={checked ? '#00F4BF' : 'white'} />
            <Path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#021123" />
        </Svg>

    )
}

export const IconPencil = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M17.7188 4.03125L15.8906 5.85938L12.1406 2.10938L13.9688 0.28125C14.1562 0.09375 14.3906 0 14.6719 0C14.9531 0 15.1875 0.09375 15.375 0.28125L17.7188 2.625C17.9062 2.8125 18 3.04688 18 3.32812C18 3.60938 17.9062 3.84375 17.7188 4.03125ZM0 14.25L11.0625 3.1875L14.8125 6.9375L3.75 18H0V14.25Z" fill="#021123" />
        </Svg>
    )
}

export const IconTrash = () => {
    return (
        <Svg width="14" height="18" viewBox="0 0 14 18" fill="none">
            <Path d="M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1 15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156 18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1 15.9844Z" fill="#021123" />
        </Svg>
    )
}
export const IconPlus = ({outline}) => {
    return (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <Path d="M15.5156 10.9844V9.01562H11.4844V4.98438H9.51562V9.01562H5.48438V10.9844H9.51562V15.0156H11.4844V10.9844H15.5156ZM3.42188 2.96875C5.39062 1 7.75 0.015625 10.5 0.015625C13.25 0.015625 15.5938 1 17.5312 2.96875C19.5 4.90625 20.4844 7.25 20.4844 10C20.4844 12.75 19.5 15.1094 17.5312 17.0781C15.5938 19.0156 13.25 19.9844 10.5 19.9844C7.75 19.9844 5.39062 19.0156 3.42188 17.0781C1.48438 15.1094 0.515625 12.75 0.515625 10C0.515625 7.25 1.48438 4.90625 3.42188 2.96875Z" fill={outline ? colors.bgColor: colors.buttons_bg}/>
        </Svg>
    )
}