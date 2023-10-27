import React from "react"
import { ScrollView, Text } from "react-native"
import { Formik } from "formik"
import {basicSchema} from "../../schemas"
import FormInput from "../../components/FormInput/FormInput"
import FormSubmitButton from "../../components/button/FormSubmitButton"
import { useDispatch } from "react-redux"
import { postPro } from "../../redux/actions/index"
import tw from "twrnc"


const ProForm = () =>{

  const dispatch = useDispatch()

  const userInfo = { 
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      occupation: '',
      description: '',
      address: '',
      pricing: '',
      image: '',
  }

  return(
    <ScrollView style={tw`mx-3 mt-10 mb-10 p-3 bg-white shadow-md rounded-lg`}>
      <Text style={tw`text-center w-full p-2 text-lg`}>Formulario de registro</Text>
      <Formik
        initialValues={userInfo}
        validationSchema= {basicSchema}
        onSubmit={(values, formikActions)=>{

          const data ={
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            occupation: [values.occupation],
            description: values.description,
            address: values.address,
            pricing: values.pricing,
            image: values.image
          }

          dispatch(postPro(data))
          
          setTimeout(() => {
            formikActions.resetForm()
            formikActions.setSubmitting(false)
          }, 3000);
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) =>{
          
          const {fullName, phoneNumber, email, password, confirmPassword, description, occupation, pricing, address, image} = values

          return(
            <>
              <FormInput 
                value={fullName}
                error={touched.fullName && errors.fullName}
                placeholder="Escribe tu nombre completo aquí"
                label="Nombre completo"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur("fullName")}
              />
              <FormInput 
                value={phoneNumber}
                error={touched.phoneNumber && errors.phoneNumber}
                placeholder="Escribe tu numero de telefono aquí"
                label="Teléfono"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur("phoneNumber")}
              />
              <FormInput 
                value={email}
                error={touched.email && errors.email}
                placeholder="Escribe tu email aquí"
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur("email")}
              />
              <FormInput 
                value={password}
                error={touched.password && errors.password}
                placeholder="Escribe tu contraseña aquí"
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur("password")}
              />
              <FormInput 
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                placeholder="Escribe tu contraseña aquí"
                label="Repita su contraseña"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur("confirmPassword")}
              />
              <FormInput 
                value={occupation}
                error={touched.occupation && errors.occupation}
                placeholder="Escribe tu ocupación aquí"
                label="Profesión"
                onChangeText={handleChange('occupation')}
                onBlur={handleBlur("occupation")}
              />
              <FormInput 
                value={description}
                error={touched.description && errors.description}
                placeholder="Escribe tu descripción aquí"
                label="Descripción"
                onChangeText={handleChange('description')}
                onBlur={handleBlur("description")}
              />
              <FormInput 
                value={address}
                error={touched.address && errors.address}
                placeholder="Escribe tu dirección aquí"
                label="Dirección"
                onChangeText={handleChange('address')}
                onBlur={handleBlur("address")}
              />
              <FormInput 
                value={pricing}
                error={touched.pricing && errors.pricing}
                placeholder="Escribe tu precio aquí"
                label="Precio"
                onChangeText={handleChange('pricing')}
                onBlur={handleBlur("pricing")}
              />
              <FormInput 
                value={image}
                error={touched.image && errors.image}
                placeholder="Pega el URL/Dirección de tu imagen aquí"
                label="Imagen"
                onChangeText={handleChange('image')}
                onBlur={handleBlur("image")}
              />
              <FormSubmitButton error={errors} submitting={isSubmitting} onPress={handleSubmit} title="Enviar"/>
            </>
            )
          }
        }
      </Formik>
    </ScrollView>
  )
}

export default ProForm



