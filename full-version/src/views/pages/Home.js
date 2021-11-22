import { useContext, Fragment } from 'react'
import Avatar from '@components/avatar'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { useHistory } from 'react-router-dom'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import Lottie from 'react-lottie'
import {
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap'
import RegisterForm from '../../components/RegisterForm'
import '@styles/base/pages/page-auth.scss'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

//eslint-disable-next-line
const checklottie = { "v": "5.6.7", "fr": 60, "ip": 0, "op": 180, "w": 1200, "h": 1200, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "check", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [575.25, 603.465, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 114, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 130, "s": [105, 105, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 136, "s": [95, 95, 100] }, { "t": 142, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Skew - Transform", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 10, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 15, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Scale - Transform", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 10, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 15, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position - Transform", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 10, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 15, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Anchor Point - Transform", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 4, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 10, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 15, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[214, -137], [-68, 130], [-164, 34]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.9725490196078431, 0.9058823529411765, 0.10980392156862745, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 56, "ix": 5 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position - Transform')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position - Transform')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position - Transform')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position - Transform')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0], "ix": 1, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Anchor Point - Transform')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Anchor Point - Transform')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Anchor Point - Transform')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Anchor Point - Transform')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "s": { "a": 0, "k": [99, 99], "ix": 3, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale - Transform')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale - Transform')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale - Transform')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale - Transform')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Skew - Transform')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Skew - Transform')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Skew - Transform')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Skew - Transform')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "tm", "s": { "a": 1, "k": [{ "i": { "x": [0.5], "y": [1] }, "o": { "x": [0.5], "y": [0] }, "t": 42, "s": [100] }, { "t": 58, "s": [0] }], "ix": 1 }, "e": { "a": 0, "k": 100, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }], "ip": 0, "op": 1800, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "circle - stroke", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 35, "s": [100] }, { "t": 36, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [617.721, 614.58, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[172.277, 0], [0, -172.277], [-172.277, 0], [0, 172.277]], "o": [[-172.277, 0], [0, 172.277], [172.277, 0], [0, -172.277]], "v": [[0, -311.936], [-311.936, 0], [0, 311.936], [311.936, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0.6392156862745098, 0.8784313725490196, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 40, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-17.721, -14.58], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [130.536, 130.536], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "tm", "s": { "a": 1, "k": [{ "i": { "x": [0.5], "y": [1] }, "o": { "x": [0.5], "y": [0] }, "t": 0, "s": [100] }, { "t": 23, "s": [0] }], "ix": 1 }, "e": { "a": 0, "k": 100, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 2, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }], "ip": 0, "op": 1800, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "circle - bg", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [617.585, 614.469, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.5, 0.5, 0.5], "y": [1, 1, 1] }, "o": { "x": [0.5, 0.5, 0.5], "y": [0, 0, 0] }, "t": 19, "s": [0, 0, 100] }, { "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.5, 0.5, 0.5], "y": [0, 0, 0] }, "t": 33, "s": [114.99999999999999, 114.99999999999999, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 40, "s": [95, 95, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 45, "s": [100, 100, 100] }, { "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 114, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 130, "s": [110.00000000000001, 110.00000000000001, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 136, "s": [95, 95, 100] }, { "t": 142, "s": [105, 105, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[172.277, 0], [0, -172.277], [-172.277, 0], [0, 172.277]], "o": [[-172.277, 0], [0, 172.277], [172.277, 0], [0, -172.277]], "v": [[0, -311.936], [-311.936, 0], [0, 311.936], [311.936, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0.6392156862745098, 0.8784313725490196, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-17.721, -14.58], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [130.536, 130.536], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 1800, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "burst", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [612.759, 610.498, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [72, 72, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[172.277, 0], [0, -172.277], [-172.277, 0], [0, 172.277]], "o": [[-172.277, 0], [0, 172.277], [172.277, 0], [0, -172.277]], "v": [[0, -311.936], [-311.936, 0], [0, 311.936], [311.936, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0.6392156862745098, 0.8784313725490196, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 1, "k": [{ "i": { "x": [0.5], "y": [1] }, "o": { "x": [0.5], "y": [0] }, "t": 30, "s": [40] }, { "t": 68, "s": [0] }], "ix": 5 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 0, "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 0, "ix": 2 } }, { "n": "o", "nm": "offset", "v": { "a": 0, "k": 0, "ix": 7 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-17.721, -14.58], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.5, 0.5], "y": [1, 1] }, "o": { "x": [0.5, 0.5], "y": [0, 0] }, "t": 26, "s": [167.536, 167.536] }, { "t": 68, "s": [251.536, 251.536] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 26, "s": [0] }, { "t": 34, "s": [100] }], "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 1800, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "burst 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [612.759, 610.498, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [72, 72, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[172.277, 0], [0, -172.277], [-172.277, 0], [0, 172.277]], "o": [[-172.277, 0], [0, 172.277], [172.277, 0], [0, -172.277]], "v": [[0, -311.936], [-311.936, 0], [0, 311.936], [311.936, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0.6392156862745098, 0.8784313725490196, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 1, "k": [{ "i": { "x": [0.5], "y": [1] }, "o": { "x": [0.5], "y": [0] }, "t": 122, "s": [40] }, { "t": 170, "s": [0] }], "ix": 5 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 0, "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 0, "ix": 2 } }, { "n": "o", "nm": "offset", "v": { "a": 0, "k": 0, "ix": 7 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-17.721, -14.58], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.5, 0.5], "y": [1, 1] }, "o": { "x": [0.5, 0.5], "y": [0, 0] }, "t": 118, "s": [167.536, 167.536] }, { "t": 170, "s": [251.536, 251.536] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 124, "s": [0] }, { "t": 132, "s": [100] }], "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 1800, "st": 0, "bm": 0 }], "markers": [] }

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Home = () => {
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()

  const tick = {
    loop: true,
    autoplay: true,
    animationData: checklottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    grid: {
      borderColor: '#EBEBEB',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -30,
        bottom: -10
      }
    },
    stroke: {
      width: 2
    },
    colors: ['#3e57ab'],
    series: [
      {
        data: [0, 20, 5, 30, 15, 45, 20, 10, 25, 15, 10]
      }
    ],
    markers: {
      size: 1,
      colors: '#3e57ab',
      strokeColors: '#3e57ab',
      strokeWidth: 0,
      strokeOpacity: 0,
      strokeDashArray: 0,
      fillOpacity: 0,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 38,
          fillColor: '#3e57ab',
          strokeColor: '#3e57ab',
          size: 5
        }
      ],
      shape: 'circle',
      radius: 0,
      hover: {
        size: 3
      }
    },
    xaxis: {
      labels: {
        show: false
        // style: {
        //   fontSize: '0px'
        // }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      max: 40
    },
    yaxis: {
      show: false,
      max: 75
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }

  const onSubmit = data => {
    if (isObjEmpty(errors)) {
      useJwt
        .login({ email, password })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          history.push(getHomeRouteForLoggedInUser(data.role))
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='auth-wrapper auth-v2' style={{ flexDirection: 'column' }}>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', alignItems: 'center' }}>
        <img src='/banner.png' style={{ width: '100%' }} />
        <Col xs='5' sm='5' md='5' lg='5' xl='5' style={{ position: 'absolute', right: '0px', float: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0' }}>
          {localStorage.getItem('user') === null ? <RegisterForm /> : ""}
        </Col>
      </Row>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto', backgroundColor: '#242b3f' }} id='video'>
        <Col className='mt-3 mb-3' sm='12' md='12' lg='12' xl='12'>
          <Row style={{ justifyContent: 'center' }}>
            <h2 className='text-danger' style={{ marginTop: '0.5rem' }}>INTRODUCING THE FIRST-EVER </h2>
            <h2 style={{ color: '#FFFF00', marginLeft: '5px', marginTop: '0.5rem' }}> BITCOIN RETURN-MULTIPLIER OPTIONS </h2>
          </Row>
        </Col>
        <Col sm='2' md='2' lg='2' xl='2' />
        <Col className='pb-3 px-5' sm='8' md='8' lg='8' xl='8'>
          <Card style={{ backgroundColor: '#364160', padding: '10px', borderRadius: '18px' }}>
            <CardBody style={{ backgroundColor: '#000000', borderRadius: '18px' }}>
              <ReactPlayer
                url='https://youtu.be/1DDiw3JBAvo'
                className='react-player-video'
                width='100%'
                controls={true}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <img src='/Process-How-To.png' style={{ width: '800px ' }} />
      </Row>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center p-5' lg='12' md='12' sm='12'>
          <div className='w-100 align-items-center justify-content-center px-5'>
            <h1 className="font-weight-bold">Unlock the Power of Fynance</h1>
            <h5 className='text-dark mt-1'>Options with 3X, 6X or 9X Leverage-Return vectors</h5>
            <h5 style={{ display: 'flex', flexDirection: 'row' }}><span className='text-danger mt-1'>Every $1 price move</span>&nbsp;<span className='text-dark mt-1'> in BTC, </span>&nbsp;<span className='text-danger mt-1'>returns</span>&nbsp;<span className='text-dark mt-1'> the option holder </span>&nbsp;<span className='text-danger mt-1'>$3, $6 or $9</span></h5>
            <Row>
              <Col sm='6' md='6' lg='6' xl='6'>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Contract Size: 1BTC</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Open for Trading 24/7</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Trading Protocol <span style={{ color: 'rgb(62, 87, 171)' }}>soon to be completely decentralized</span></h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Superior Asset. Leveraged Upside, Limited Downside</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Returns are net superior to holding spot BTC</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Profit from volatility. Call and Put Options</h5>
                  </Col>
                </Row>
              </Col>
              <Col sm='6' md='6' lg='6' xl='6'>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>100% Gas Free. NO gas cost</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Instant Withdrawals. There is no waiting required</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Deep Liquidity. Don't wait for the market makers!</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}><span style={{ color: 'rgb(62, 87, 171)' }}>Unique Products.</span> Proprietary Options that offer leveraged upside exposure with limited risk</h5>
                  </Col>
                </Row>
                <Row style={{ margin: '10px 0px 10px 0px' }}>
                  <Col sm='auto' md='auto' lg='auto' xl='auto'>
                    <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: '#00a3e0' }} />
                  </Col>
                  <Col>
                    <h5 style={{ margin: '0px' }}>Investment entry-levels considerably lower compared to buying spot BTC. Every $1 placed in an option position returns 300%, 600% or 900%, considerably more than it would if kept in spot BTC.</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src='/Graphic-Vector 1 Home Page.png' style={{ width: '65%' }} />
      </Row>
      <Row className='auth-inner m-0' style={{ overflow: 'none', height: 'auto' }}>
        <Col className='d-none d-flex align-items-center p-5' lg='12' md='12' sm='12'>
          <div className='w-100 align-items-center justify-content-center px-5'>
            <h1 className="font-weight-bold pt-2 pb-2">Why you should choose Fynance’s Trading Infrastructure</h1>
            <Row>
              <Col><img src='/vectors/3.png' style={{ width: '100%' }} /></Col>
              <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-weight-bold pt-1 pb-1">Privacy</h3>
                <h5>We realize that in the IT driven world the most valuable asset is data which could be used against you. Fynance values your privacy and the right to not disclose your personal information.</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-weight-bold pt-1 pb-1">Superior System Architecture</h3>
                <h5>Fynance’s proprietary technology and global server infrastructure ensure an unmatched system performance making us the ideal choice for algorithmic and high-frequency traders as well as for retail investors.</h5>
              </Col>
              <Col><img src='/vectors/2.png' style={{ width: '100%' }} /></Col>
            </Row>
            <Row>
              <Col><img src='/vectors/4.png' style={{ width: '100%' }} /></Col>
              <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-weight-bold pt-1 pb-1">Multilayer Secure Trading</h3>
                <h5>Fynance utilizes the most practical and highly scalable infrastructure type, that, even during peak market activity, enables traders to trade uninterrupted.
                  Fynance combines the very best of cryptocurrency and bank-grade security standards. 100% of the assets are stored in cold offline wallets with a multi-sig, MPC and split private key structure.</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-weight-bold pt-1 pb-1">Transparency in every aspect</h3>
                <h5>Every bit of information is available to you. From the submission of your order to its execution - you are in total control.</h5>
              </Col>
              <Col><img src='/vectors/6.png' style={{ width: '100%' }} /></Col>
            </Row>
            <Row>
              <Col><img src='/vectors/1.png' style={{ width: '100%' }} /></Col>
              <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-weight-bold pt-1 pb-1">Decentralization</h3>
                <h5>Fynance is in the process of evolving its option-architecture and adjacent infrastructure into a completely decentralized protocol, where every trade will be deployed via the Ethereum blockchain.This will create a completely</h5>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{ width: '100%', marginLeft: '0', marginRight: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src='/Graphic-Vector 2 Home Page.png' style={{ width: '100%' }} />
      </Row>
    </div>
  )
}

export default Home