import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Home.css'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
    )

    return (
        <div className="main">
            <div className="container">
                <div className="content">
                    {error && <p>{error}</p>}
                    {documents && <TransactionList transactions={documents} />}
                </div>
                <div className="sidebar">
                    <TransactionForm uid={user.uid} />
                </div>
            </div>
        </div>
    )
}