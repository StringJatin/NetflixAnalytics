import React from 'react'
import "./WidgetLg.css"


const WidgetLg = () => {
 
 
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' className='widgetLgImg'></img>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 June 2024</td>
          <td className='widgetLgDate'>$122,20</td>
          <td className='widgetLgStatus'>
           <button className='widgetLgButton Approved'>Approved</button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' className='widgetLgImg'></img>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 June 2024</td>
          <td className='widgetLgDate'>$122,20</td>
          <td className='widgetLgStatus'>
           <button className='widgetLgButton Declined'>Declined</button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' className='widgetLgImg'></img>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 June 2024</td>
          <td className='widgetLgDate'>$122,20</td>
          <td className='widgetLgStatus'>
           <button className='widgetLgButton Pending'>Pending</button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' className='widgetLgImg'></img>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 June 2024</td>
          <td className='widgetLgAmount'>$122,20</td>
          <td className='widgetLgStatus'>
           <button className='widgetLgButton Approved'>Approved</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
