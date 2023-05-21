"use client"

import React from 'react';
import { ApolloProvider as Provider } from '@apollo/client'
import client from './client'
import type { AppProps } from 'next/app';

export default function ApolloProvider({children}:any) {
    return (
        <Provider client={client}>{children}</Provider>
    )
}