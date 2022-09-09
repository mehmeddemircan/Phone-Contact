import React from 'react'

const AccountLinkList = () => {
  return (
    <div>
    <div class="p-2">
      <h3 class="p-2" style={{ color: "#6e7a81" }}>
        Hesabım
      </h3>
      <div class="d-flex flex-column">
        <a
          class="p-2 text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Seyahatlerim
        </a>
        <a
          class="p-2  text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Alarmlarım
        </a>
        <a
          class="p-2  text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Kullanici Bilgilerim
        </a>
        <a
          class="p-2  text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Kayıtlı yolcularim
        </a>
        <a
          class="p-2  text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Fatura Bilgilerim
        </a>
        <a
          class="p-2  text-dark"
          style={{ borderBottom: "1px solid rgb(198, 198, 198) " }}
        >
          Cikis Yap
        </a>
      </div>
    </div>
  </div>
  )
}

export default AccountLinkList