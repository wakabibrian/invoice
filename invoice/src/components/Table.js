import React from "react";

export default function Table({ list }) {
    return (
        <>
            <table width="100%" className="mb-10">
                <thead>
                    <tr className="bg-gray-100">
                        <td className="font-bold">Item Description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                    </tr>
                </thead>
                {list.map(({ description, amount, price, quantity, id }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </>
    );
}
