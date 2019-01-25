package org.voegtle.homework.data

import com.googlecode.objectify.annotation.Entity
import com.googlecode.objectify.annotation.Id
import com.googlecode.objectify.annotation.Index

@Entity @Index class Administrator(@Id var id: Long? = null, var gmailAddress: String? = null, var name: String? = null, var active: Boolean = false )