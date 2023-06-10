'use client';

import {useEffect, useState} from "react";

export default function CountingLanguage() {
    const [text, setText] = useState('') // 입력 문자
    const [word, setWord] = useState('') // 입력 단어

    const [cntSpecial, setCntSpecial] = useState(0) // 특수 문자 수
    const [cntKor, setCntKor] = useState(0) // 한글 수
    const [cntEng, setCntEng] = useState(0) // 영어 수
    const [cntNum, setCntNum] = useState(0) // 숫자 수
    const [cntSpace, setCntSpace] = useState(0) // 공백 수
    const [cntSingle, setCntSingle] = useState(0) // 자음, 모음 수
    const [cntEmoji, setCntEmoji] = useState(0) // 이모지 수
    const [cntMatchingWord, setCntMatchingWord] = useState(0) // 매칭 단어 수

    const [noneSingle, setNoneSingle] = useState(false) // 자음, 모음 제외
    const [noneSpecial, setNoneSpecial] = useState(false) // 공백 제외
    const [noneSpace, setNoneSpace] = useState(false) // 특수문자 제외
    const [noneEmoji, setNoneEmoji] = useState(false) // 이모티콘 제외

    const countingSentence = (text: string) => {
        setText(text)
        let cspi = 0, ck = 0, cn = 0, ce = 0, csk = 0, csp = 0

        const excludeEmojiText = checkEmoji(text)

        Array.from(excludeEmojiText).map((str: string) => {
            cspi += checkSpecial(str) ? 1 : 0
            ck += checkKor(str) ? 1 : 0
            cn += checkNum(str) ? 1 : 0
            ce += checkEng(str) ? 1 : 0
            csk += checkSingleKor(str) ? 1 : 0
            csp += checkSpace(str) ? 1 : 0

            // console.log('ck:', ck, 'cn:', cn, 'ce:', ce, 'csk:', csk, 'cspi:', cspi, 'csp:', csp)
        })

        setCntKor(ck + cn + ce)
        setCntSingle(csk)
        setCntEng(ce)
        setCntNum(cn)
        setCntSpecial(cspi)
        setCntSpace(csp)
        // setTotalCnt(ck + cn + ce + csk + cspi + csp + cntEmoji)
    }

    // 특수 문자 체크 (숫자 제외)
    const checkSpecial = (str: string) => {
        const regExp = /^[!?@#$%^&*():;+=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]+$/
        if(regExp.test(str)) {
            return true;
        }else{
            return false;
        }
    }

    // 자음, 모음 체크
    const checkSingleKor = (str: string) => {
        const regExp = /[ㄱ-ㅎㅏ-ㅣ]/g;
        if(regExp.test(str)){
            return true;
        }else{
            return false;
        }
    }

    // 한글 체크
    const checkKor = (str: string) => {
        const regExp = /[가-힣]/g;
        if(regExp.test(str)){
            return true;
        }else{
            return false;
        }
    }
    // 숫자 체크
    const checkNum = (str: string) => {
        const regExp = /[0-9]/g;
        if(regExp.test(str)){
            return true;
        }else{
            return false;
        }
    }

    // 영문(영어) 체크
    const checkEng = (str: string) => {
        const regExp = /[a-zA-Z]/g; // 영어
        if(regExp.test(str)){
            return true;
        }else{
            return false;
        }
    }

    // 공백(스페이스 바) 체크
    const checkSpace = (str: string) => {
        if(str.search(/\s/) !== -1) {
            return true; // 스페이스가 있는 경우
        }else{
            return false; // 스페이스 없는 경우
        }
    }

    // 이모티콘 체크
    const checkEmoji = (text: string): string => {
        const regExp = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/gi;

        const emojis = text.match(regExp)
        const cntEmoji = emojis ? emojis.length : 0

        emojis?.map((emoji) => {
            text.replace(emoji, '')
        })

        setCntEmoji(cntEmoji)

        return text
    }

    const countingWord = (newWord: string) => {
        if(newWord === '') return

        setWord(newWord)

        if(text.length === 0) {
            setCntMatchingWord(0)
        }else {
            const pattern = new RegExp(newWord,'g');
            const matches = text.match(pattern);
            const cntMatchingWord = matches ? matches.length : 0

            setCntMatchingWord(cntMatchingWord)
        }
    }

    useEffect(() => {
        countingSentence(text)
    }, [noneSpace, noneSingle, noneSpace, noneEmoji])

    useEffect(() => {
        countingWord(word)
    }, [text])

    return (
        <div className="container">
            <div className="header">
                <p>words count</p>
                <h2>글자 수 세기 🖐🏻</h2>
            </div>
            <div className="contents">
                <div className="box">
                    <textarea placeholder="글자 수를 확인할 텍스트를 입력해 주세요." onChange={e => countingSentence(e.target.value)}></textarea>
                </div>
                <div className="box">
                    <div className="title">
                        <h4>제외할 옵션을 선택해 주세요<p>(중복 선택 가능)</p></h4>
                    </div>
                    <ul className="check-wrap">
                        <li><input type="checkbox" id="noneSpace" checked={noneSpace} onChange={(e) => setNoneSpace(e.target.checked)} /><label htmlFor="noneSpace"><span>공백</span></label></li>
                        <li><input type="checkbox" id="noneSingle" checked={noneSingle} onChange={(e) => setNoneSingle(e.target.checked)} /><label htmlFor="noneSingle"><span>자/모음</span></label></li>
                        <li><input type="checkbox" id="noneSpecial" checked={noneSpecial} onChange={(e) => setNoneSpecial(e.target.checked)} /><label htmlFor="noneSpecial"><span>특수문자(텍스트)</span></label></li>
                        <li><input type="checkbox" id="noneEmoji" checked={noneEmoji} onChange={(e) => setNoneEmoji(e.target.checked)} /><label htmlFor="noneEmoji"><span>이모티콘(이모지)</span></label></li>
                    </ul>
                </div>
                <div className="box">
                    <div className="title">
                        <h4>글자 수를 확인해 보세요 !</h4>
                    </div>
                    <ul className="count-wrap">
                        <li>
                            <h6>전체 글자 수</h6>
                            <div><p>{cntKor + cntSingle + cntSpecial + cntSpace + cntEmoji}</p><span>자</span></div>
                        </li>
                        <li>
                            <h6>공백 제외<span>(전체 글자 수 - 공백)</span></h6>
                            <div><p>
                                {cntKor + cntSingle + cntSpecial + cntEmoji}
                            </p><span>자</span></div>
                        </li>
                        <li>
                            <h6>선택 옵션 제외<span>(전체 글자 수 - 선택 옵션)</span></h6>
                            <div><p>
                                {
                                    cntKor
                                    + (noneSingle ? 0 : cntSingle)
                                    + (noneSpecial ? 0 : cntSpecial)
                                    + (noneSpace ? 0 : cntSpace)
                                    + (noneEmoji ? 0 : cntEmoji)
                                }
                            </p><span>자</span></div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <div className="title">
                        <h4>키워드 반복 횟수를 확인해 보세요<p>(띄어쓰기 구분)</p></h4>
                        <div><p>{cntMatchingWord}</p><span>번</span></div>
                    </div>
                    <input type="text" placeholder="반복 횟수를 확인할 키워드를 입력해 주세요." onChange={(e) => countingWord(e.target.value)} />
                </div>
            </div>
            <div className="footer">
                <p>development of kevin</p>
            </div>
        </div>
    )
}
