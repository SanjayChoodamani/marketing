import '../styles/Button.css';

export default function Button({ content }){
    return (
        <button className='btn'>
            {content}
        </button>
    );
}