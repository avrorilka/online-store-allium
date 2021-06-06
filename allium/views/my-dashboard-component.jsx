import { ApiClient } from 'admin-bro'
import { Box, Header, Text} from '@admin-bro/design-system'
import React, { useEffect, useState } from "react";

const api = new ApiClient()

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <Box variant="grey">
      <Box variant="white">
        <Header.H2>Адміністративна панель магазину одягу Allium</Header.H2>
        <Text variant="lg" marginBottom={5}>Оберіть категорію для редагування у навігаційному меню</Text>
      </Box>
    </Box>
  )
}

export default Dashboard