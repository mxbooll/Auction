'use client'

import React from 'react';
import {Button} from "flowbite-react";
import Link from "next/link";

export default function UserActions() {
    return (
        <Button outline>
            <Link href={'/session'}>
                Session
            </Link>
        </Button>
    );
}