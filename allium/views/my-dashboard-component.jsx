import { ApiClient } from 'admin-bro'
import { Box, Header, Text, Link, LinkProps } from '@admin-bro/design-system'
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
        <Header.H3>Статистика: </Header.H3>
        <Link href="/getTotalAmount" variant="primary" mr="xl">Кількість товару на складі</Link>
        <Link href="/getOrderAmount" variant="primary" mr="xl">Кількість придбаного товару</Link>
      </Box>
    </Box>
  )
}

export default Dashboard