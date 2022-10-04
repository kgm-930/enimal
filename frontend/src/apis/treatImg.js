import WomboDream from './dream-api/dist/app'

const typeToStyle = {
  Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

const convert = {
	'저어새':'spoonbill',	'우파루파':'아홀로틀', '강토끼':'부시맨토끼',
	'상괭이':'finless porpoise', '듀공':'dugong', '매':'hawk'
}

// ai 이미지 생성
// 백과 통신
// 백 파일로 옮길 예정 => account의 makeImg와 이름 겹쳐도 상관 없을 듯
export async function makeImg(type, enimal) {
	let prompt
	if (enimal in convert) {
		prompt = convert[enimal]
	} else {
		prompt = enimal
	}
	// if (prompt in convert) {
	// 	prompt = convert[prompt]
	// }
	const style = typeToStyle[type]
	const image = await WomboDream.generateImage(style, prompt, null, null, null, 1000, 30)
	// console.log(image)
	return image.result.final
}