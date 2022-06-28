import React, { useState } from 'react'
import './modale.css'
const Modale = () => {
    const [modale, setmodale] = useState(false)

    const togglemodale = () => {
        setmodale(!modale)
        console.log(modale)
    }

    if (modale) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            <button onClick={togglemodale}>로그인</button>
            {modale && (
                <div className='modal'>
                    <div onClick={togglemodale} className='overlay'></div>
                    <div className='modal-content'>
                        <h2>로그인</h2>
                        <div><input type={'text'} /></div>
                        <div><input type={'text'} /></div>
                        <button onClick={togglemodale}>로그인</button>
                        <button onClick={togglemodale}>닫기</button>
                    </div>
                </div>
            )}
            <p>Flutter는 React Native와 비슷한 성격을 가지고 있으나 JavaScript가 아닌 구글의 Dart언어를 사용하며 개발자나 패키지의 수 측면에서는 아직 React Native에 상당히 밀리고 있는 상황이다. 또한 리액트 네이티브를 Xamarin과 비교했을 때도 전자가 모든 부분에서 우위를 차지하고 있다. 무엇보다 앱스토어 심사없이 UI와 function을 업데이트할 수 있는 Code Push 기능은 하이브리드와 크로스플랫폼 전체를 통틀어 React Native가 유일하기 때문에 큰 장점이라 볼 수 있다.
                플러터와 비교했을 때 프레임 드랍 문제가 있기는 하다.</p>
        </div>

    )
}
export default Modale