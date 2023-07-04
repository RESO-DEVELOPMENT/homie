import React from 'react'
import Link from 'next/link'
const Tags = ({collections, productCount}) => {
    let i = 0
    return (
        <>
            <Link href={`/collection`}>
                <h5 className="widget_title">Danh Mục</h5>
            </Link>
            <ul className="widget_categories">
                {collections.map((collection) => (
                    <li key={collection.id}>
                        <Link href={`/collection/${[collection.code]}`}>
                            <span className="categories_name">
                                {collection.name}
                            </span>
                            <span className="categories_num">
                                ({productCount[i]})
                            </span>
                            <span style={{ display: "none" }}>{i++}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Tags