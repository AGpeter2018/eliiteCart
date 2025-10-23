import './withspinner.style.scss'
 const WithSpinner = WrappedComponent => {
    const Spinner = ({loading, ...otherProps}) => {
        return (
            loading ? (
                <div className="spinner" >
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
            ): 
            (<WrappedComponent {...otherProps}/>)
        )
    }
    return Spinner
}
export default WithSpinner