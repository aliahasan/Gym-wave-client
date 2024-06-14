/* eslint-disable react/prop-types */
import React from 'react';

const SubscriberTable = ({subscriber}) => {
    return (
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
          <p>{subscriber?.name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
          <p className="text-gray-900 whitespace-no-wrap">{subscriber?.email}</p>
        </td>
        
      </tr>
    );
};

export default SubscriberTable;