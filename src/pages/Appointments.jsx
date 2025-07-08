import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointments = () => {

  const {docId} = useParams()
  const {doctor} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async ()=>{
    const docInfo = doctor.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  }, [doctor, docId])

  return docInfo &&(
    <div>

      <div>
        {/* =====doctor details===== */}
        <div>
          <img src={docInfo.image} alt="" />
        </div>
        <div>
          {/* ====doc info : name, degree etc.==== */}
          <p>{docInfo.name} <img src={assets.verified_icon} alt="" /> </p>
        </div>
      </div>
      
    </div>
  )
}

export default Appointments
