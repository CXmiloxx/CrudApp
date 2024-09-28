import BackButton from "../components/UI/BackButton";
import UserForm from "../components/user/UserForm";

export default function CreateUser() {
    return (
        <div>
            <BackButton route={'/'} label="Volver"/>
            <UserForm />
        </div>
    )
}
